import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const { theme } = useTheme();

  const projects = [
    {
      title: "TuniCommerce",
      year: "",
      description: "An E-Commerce website builder.",
      technology: "NextJS, PostgreSQL, Drizzle, Cleark, Sentry",
      images: [
        "../assets/tunicommerce/1.png",
        "../assets/tunicommerce/2.png",
        "../assets/tunicommerce/3.png",
        "../assets/tunicommerce/4.png",
        "../assets/tunicommerce/5.png",
      ],
      type: "web",
    },
    {
      title: "ACC App",
      year: "",
      description:
        "A mobile app for the African community in Alberta, Canada, to share resources and promote their work.",
      technology: "React Native, Firebase, FastAPI, Contabo, Keycloak",
      images: [
        "../assets/AccApp/Splash screen (2).png",
        "../assets/AccApp/Sign Up.png",
        "../assets/AccApp/Select Community.png",
        "../assets/AccApp/Main Activity.png",
        "../assets/AccApp/Community Map.png",
        "../assets/AccApp/Chats.png",
        "../assets/AccApp/Calls.png",
        "../assets/AccApp/Single update.png",
        "../assets/AccApp/Group.png",
        "../assets/AccApp/Events.png",
      ],
      type: "mobile",
    },

    {
      title: "AfricaOne Social App Admin Panel",
      year: "",
      description: "Admin dashboard for a social app.",
      technology: "React, Firebase, Material UI, Chart.js, Django, FastAPI",
      images: [
        "../assets/admin-dashboard/1.png",
        "../assets/admin-dashboard/2.png",
        "../assets/admin-dashboard/3.png",
        "../assets/admin-dashboard/4.png",
      ],
      type: "web",
    },
    {
      title: "GMAO",
      year: "",
      description: "A web application for maintenance management in a factory.",
      technology: "React, Django, MySql, MongoDB",
      images: ["../assets/gmao/1.png"],
      type: "web",
    },
  ];

  const handleExpand = (index: number) => {
    setExpandedProject(index);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setExpandedProject(null);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? projects[expandedProject!].images.length - 1
        : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === projects[expandedProject!].images.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-4xl font-bold text-[#d000ff]">Projects</h1>
      <p className="text-lg ">Here are some of the projects I've worked on.</p>
      <div className="grid gap-4">
        {/* Projects Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-gray-300 pb-2"></h2>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-md hover:shadow-lg transition-all cursor-pointer"
                onClick={() => handleExpand(index)}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-500">
                    {project.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className={
                      project.type === "mobile"
                        ? "grid grid-cols-5 gap-0.5 rounded-sm"
                        : "rounded-sm"
                    }
                  >
                    {project.images
                      .slice(0, project.type === "mobile" ? 5 : 1)
                      .map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={image}
                          alt={project.title}
                          className={cn([
                            "mb-4 w-full h-72 ",
                            project.type === "mobile"
                              ? "object-contain"
                              : "object-cover",
                            ,
                          ])}
                        />
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {expandedProject !== null && (
        <div
          className={`fixed inset-0 flex items-center justify-center ${
            theme === "dark"
              ? "bg-black bg-opacity-75"
              : "bg-black bg-opacity-50"
          } z-50`}
          onClick={handleCloseModal}
        >
          <div
            className={`${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
            } p-8 rounded-md shadow-lg w-11/12 md:w-3/4 lg:w-2/3  relative`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mb-4 w-full h-full ">
              <img
                src={projects[expandedProject].images[currentImageIndex]}
                alt={projects[expandedProject].title}
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                onClick={handlePrevImage}
              >
                <ChevronLeft color="#000" />
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                onClick={handleNextImage}
              >
                <ChevronRight color="#000" />
              </button>
            </div>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
              {projects[expandedProject].description}
            </p>
            <p
              className={`mt-2 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <strong>Tech Stack:</strong>{" "}
              {projects[expandedProject].technology}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
