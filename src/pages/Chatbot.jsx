import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { SendIcon, Loader2 } from "lucide-react";
import { useTheme } from "next-themes";

const Chatbot = () => {
  const { theme } = useTheme();
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Hello! I'm a Gemini-powered assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(true);
  const messagesEndRef = useRef(null);

  const saveApiKey = () => {
    if (apiKey.trim() !== "") {
      localStorage.setItem("gemini_api_key", apiKey);
      setShowApiKeyInput(false);
    }
  };

  useEffect(() => {
    const savedApiKey = localStorage.getItem("gemini_api_key");
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setShowApiKeyInput(false);
    }
  }, []);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [
            {
              role: "user",
              parts: [{ text: input }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey,
          },
        }
      );

      let botResponse = "Sorry, I couldn't process that request.";

      if (
        response.data.candidates &&
        response.data.candidates[0]?.content?.parts
      ) {
        botResponse = response.data.candidates[0].content.parts[0].text;
      }

      setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
    } catch (error) {
      console.error("Error sending message to Gemini API:", error);
      let errorMessage = "Sorry, something went wrong.";

      if (error.response) {
        errorMessage = `Error: ${
          error.response.data.error?.message || "API error occurred"
        }`;
      } else if (error.request) {
        errorMessage =
          "No response from Gemini API. Please check your internet connection.";
      }

      setMessages((prev) => [...prev, { role: "bot", content: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (showApiKeyInput) {
        saveApiKey();
      } else {
        handleSend();
      }
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex items-center justify-center m-20 tab-height">
      <Card
        className={`w-11/12 max-w-4xl h-full flex flex-col ${
          theme === "dark"
            ? "bg-slate-800 text-white"
            : "bg-white text-slate-900"
        }`}
      >
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Chat Assistant</CardTitle>
        </CardHeader>

        {showApiKeyInput ? (
          <CardContent className="flex flex-col items-center justify-center h-full">
            <div className="space-y-4 w-full max-w-md">
              <h3 className="text-center">Please enter your Gemini API key</h3>
              <Input
                type="password"
                placeholder="Gemini API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                onKeyPress={handleKeyPress}
                className={`w-full ${
                  theme === "dark"
                    ? "bg-slate-700 border-slate-600 text-white"
                    : ""
                }`}
              />
              <Button onClick={saveApiKey} className="w-full">
                Save and Continue
              </Button>
            </div>
          </CardContent>
        ) : (
          <>
            <CardContent className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className="flex items-start gap-2 max-w-3/4">
                      {message.role === "bot" && (
                        <Avatar className="h-8 w-8 bg-emerald-600">
                          <div className="text-xs font-semibold text-white">
                            G
                          </div>
                        </Avatar>
                      )}
                      <div
                        className={`p-3 rounded-lg ${
                          message.role === "user"
                            ? "bg-blue-500 text-white"
                            : theme === "dark"
                            ? "bg-slate-700"
                            : "bg-slate-200"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-2">
                      <Avatar className="h-8 w-8 bg-emerald-600">
                        <div className="text-xs font-semibold text-white">
                          G
                        </div>
                      </Avatar>
                      <div
                        className={`p-3 rounded-lg ${
                          theme === "dark" ? "bg-slate-700" : "bg-slate-200"
                        }`}
                      >
                        <Loader2 className="h-5 w-5 animate-spin" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
            <CardFooter
              className={`p-4 pt-0 ${
                theme === "dark" ? "border-t border-slate-700" : "border-t"
              }`}
            >
              <div className="flex w-full gap-2">
                <Input
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className={`flex-1 ${
                    theme === "dark"
                      ? "bg-slate-700 border-slate-600 text-white"
                      : ""
                  }`}
                />
                <Button
                  onClick={handleSend}
                  size="icon"
                  disabled={isLoading}
                  className={
                    theme === "dark"
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                  }
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <SendIcon size={18} />
                  )}
                </Button>
              </div>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
};

export default Chatbot;
