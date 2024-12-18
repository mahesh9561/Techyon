import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { ProjectColumn } from "./ProjectColumn";

const projectsData = {
  notStarted: {
    title: "Not Started",
    color: "bg-zinc-400",
    count: 2,
    projects: [
      {
        projectName: "Project Name",
        projectId: "P-11",
        progress: 50,
        startDate: "01/01/2024",
        endDate: "31/01/2024",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc40ebe211216a3256d29311278ed275dced59b91b90108a1b1fa59478aa7aba?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
        teamMembers:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/21247da66d1eb95807708c7a4a14ff60a6df0d5698d0d8fd3b3d5e801eb03da5?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
        filesCount: 12,
      },
    ],
  },
  inProgress: {
    title: "In Progress",
    color: "bg-blue-500",
    count: 2,
    projects: [
      {
        projectName: "Project Name",
        projectId: "P-11",
        progress: 50,
        startDate: "01/01/2024",
        endDate: "31/01/2024",
        status: "On Track",
        statusColor: "bg-yellow-500",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/712c06624a6b5d846a051f4bfbe7f25f36bae571dbc7aaa075a30e9804b32671?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
        teamMembers:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/21247da66d1eb95807708c7a4a14ff60a6df0d5698d0d8fd3b3d5e801eb03da5?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
        filesCount: 12,
      },
    ],
  },
  inReview: {
    title: "In Review",
    color: "bg-slate-500",
    count: 2,
    projects: [
      {
        projectName: "Project Name",
        projectId: "P-11",
        progress: 50,
        startDate: "01/01/2024",
        endDate: "31/01/2024",
        status: "Delayed",
        statusColor: "bg-red-600",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fed29e933b58d6448e8e703074b1d3abcd32bbf195335aeb9556882a87e67a4?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
        teamMembers:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/21247da66d1eb95807708c7a4a14ff60a6df0d5698d0d8fd3b3d5e801eb03da5?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
        filesCount: 12,
      },
    ],
  },
  inRevision: {
    title: "In Revision",
    color: "bg-gray-700",
    count: 2,
    projects: [
      {
        projectName: "Project Name",
        projectId: "P-11",
        progress: 50,
        startDate: "01/01/2024",
        endDate: "31/01/2024",
        status: "On Track",
        statusColor: "bg-yellow-500",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6ac3c8f8b25e0c984b6cb383f62ce55e1ce87e4d29c2e8e2e363d28f89298a2?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
        teamMembers:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/21247da66d1eb95807708c7a4a14ff60a6df0d5698d0d8fd3b3d5e801eb03da5?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
        filesCount: 12,
      },
    ],
  },
  completed: {
    title: "Completed",
    color: "bg-green-500",
    count: 2,
    projects: [
      {
        projectName: "Project Name",
        projectId: "P-11",
        progress: 50,
        startDate: "01/01/2024",
        endDate: "31/01/2024",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/712c06624a6b5d846a051f4bfbe7f25f36bae571dbc7aaa075a30e9804b32671?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
        teamMembers:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/21247da66d1eb95807708c7a4a14ff60a6df0d5698d0d8fd3b3d5e801eb03da5?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33",
        filesCount: 12,
      },
    ],
  },
};

export const ProjectDashboard = () => {
  return (
    <div className="flex overflow-hidden flex-wrap bg-white">
      <Sidebar />
      <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
        <Header />
        <div className="flex flex-wrap gap-2.5 mt-6 mr-2.5 ml-6 max-md:max-w-full">
          <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <div className="flex flex-col justify-center self-center w-full max-w-[1180px] max-md:max-w-full">
              {Object.entries(projectsData).map(([key, columnData]) => (
                <ProjectColumn key={key} {...columnData} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
