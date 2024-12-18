import React from "react";

export const ProjectCard = ({
  projectName,
  projectId,
  progress,
  startDate,
  endDate,
  status,
  teamMembers,
  filesCount,
  icon,
  statusColor,
}) => {
  return (
    <div className="flex flex-col justify-center w-full rounded-lg border border-solid border-zinc-300">
      <div className="flex z-10 flex-col justify-center p-1.5 -my-1.5 rounded-lg border border-solid border-zinc-300">
        <div className="flex flex-col rounded-lg border-solid shadow-sm border-[0.5px] border-zinc-100">
          <div className="flex relative flex-col justify-between py-2.5 pl-2.5 shadow-sm min-h-[175px]">
            <div className="flex absolute right-0 bottom-0 z-0 bg-white rounded-lg h-[175px] min-h-[175px] w-[270px]" />
            <div className="flex z-0 flex-col w-full">
              <div className="flex flex-col w-full tracking-normal min-h-[109px]">
                <div className="flex flex-col w-full font-bold tracking-normal">
                  <div className="flex gap-6 justify-between items-center w-full">
                    <div className="flex gap-2 justify-center items-center self-stretch py-0.5 pr-1 my-auto min-h-[24px]">
                      <img
                        loading="lazy"
                        src={icon}
                        alt={`${projectName} icon`}
                        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                      />
                      <div className="self-stretch my-auto">{projectName}</div>
                    </div>
                    <div className="flex self-stretch py-0.5 my-auto bg-white rounded min-h-[24px]" />
                    <div className="flex gap-1.5 items-center self-stretch my-auto whitespace-nowrap">
                      <div className="gap-2 self-stretch my-auto min-h-[24px]">
                        ID:
                      </div>
                      <div className="gap-2 self-stretch py-1.5 my-auto min-h-[24px]">
                        {projectId}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-5 w-full text-xs whitespace-nowrap">
                  <div className="self-stretch my-auto">07</div>
                  <div className="flex flex-col flex-1 shrink self-stretch my-auto text-xs font-bold rounded-none basis-0 text-slate-700">
                    <div className="flex flex-col items-start px-px rounded-lg bg-zinc-100">
                      <div className="px-6 py-1 w-28 max-w-full bg-green-400 rounded-lg">
                        {progress}%
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch my-auto">14</div>
                </div>
                <div className="flex flex-col self-start mt-5 font-medium text-neutral-900">
                  <div className="flex gap-1 justify-center items-center py-0.5 rounded">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/78172918192216dd0c7458070e19e558c4a7076aa51ce263c0e7f42bbc71b09c?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33"
                      alt="Calendar icon"
                      className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                    />
                    <div className="gap-1 self-stretch my-auto">
                      {startDate} - {endDate}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 justify-between items-center pt-3 mt-2.5 w-full font-bold tracking-normal border-solid border-t-[0.5px] border-t-zinc-100">
                <img
                  loading="lazy"
                  src={teamMembers}
                  alt="Team members"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[2.96] w-[71px]"
                />
                <div className="flex gap-1.5 items-center self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/768affd85feea1860b45f6cfda0743146c7fa489c0562281375ab9e71dbba74f?placeholderIfAbsent=true&apiKey=4a636eb9586a4d7388eab99ac1620b33"
                    alt="Files icon"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                  <div className="gap-1.5 self-stretch my-auto min-h-[24px] rounded-[100px]">
                    {filesCount} Files
                  </div>
                </div>
              </div>
            </div>
            {status && (
              <div className="flex absolute right-0 z-0 flex-col pb-2.5 tracking-normal text-white h-[35px] top-[34px] w-[75px]">
                <div
                  className={`gap-2.5 self-stretch py-1.5 pl-2.5 ${statusColor} rounded`}
                >
                  {status}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
