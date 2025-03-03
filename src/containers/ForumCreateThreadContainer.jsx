import React, { useState } from "react";
import ForumThreadInputField from "../components/ForumThreadInputField";
import ForumThreadInputFieldRoadmapDescription from "../components/ForumThreadInputFieldRoadmapDescription";
import ForumThreadInputFieldRoadmapSection from "../components/ForumThreadInputFieldRoadmapSection";
import ForumThreadInputFieldRoadmapSectionButton from "../components/ForumThreadInputFieldRoadmapSectionButton";

export default function ForumCreateThreadContainer(props) {
    const [threadData, setThreadData] = useState({
        threadType: "forum",
        threadTitle: "",
        threadDescription: "",
    });

    const [roadmapThreadData, setRoadmapThreadData] = useState({
        threadType: "roadmap",
        roadmapThreadTitle: "",
        roadmapThreadAuthor: "",
        roadmapProfileImageLink: "",
        roadmapBannerImageLink: "",
        roadmapDescription: [
            {
                roadmapDescriptionTitle: "",
                roadmapDescriptionContent: "",
            },
        ],
        roadmapSection: [
            {
                roadmapSectionType: "Courses",
                roadmapSectionTitle: "",
                roadmapSectionDescription: "",
                roadmapSectionButton: [{}],
            },
        ],
    });

    const [isThreadTypeRoadmap, setIsThreadTypeRoadmap] = useState(false);
    const [isSectionTypeProject, setIsSectionTypeProject] = useState(false);

    // detect thread type
    const handleSelectThreadType = (event) => {
        if (event.target.value === "roadmap") {
            setIsThreadTypeRoadmap(true);
        } else {
            setIsThreadTypeRoadmap(false);
        }
        setThreadData((prev) => ({ ...prev, threadType: event.target.value }));
    };

    // detect roadmap section type and update state accordingly
    const handleSelectSectionType = (index, name, value) => {
        if (value === "roadmapSectionProjects") {
            setIsSectionTypeProject(true);
        } else {
            setIsSectionTypeProject(false);
        }

        setRoadmapThreadData((prev) => ({
            ...prev,
            roadmapSection: prev.roadmapSection.map((item, i) =>
                i === index ? { ...item, [name]: value } : item
            ),
        }));
    };

    // roadmap description mapping, adding, editing
    const mapRoadmapThreadDescriptionData = (useState) =>
        useState.roadmapDescription.map((description, index) => (
            <ForumThreadInputFieldRoadmapDescription
                key={index}
                index={index}
                description={description}
                onDescriptionInputChange={handleInputDescriptionChange}
            />
        ));

    const addRoadmapThreadDescription = () => {
        setRoadmapThreadData((prev) => ({
            ...prev,
            roadmapDescription: [
                ...prev.roadmapDescription,
                { roadmapDescriptionTitle: "", roadmapDescriptionContent: "" },
            ],
        }));
    };

    const handleInputDescriptionChange = (index, name, value) => {
        setRoadmapThreadData((prev) => ({
            ...prev,
            roadmapDescription: prev.roadmapDescription.map((item, i) =>
                i === index ? { ...item, [name]: value } : item
            ),
        }));
    };

    // roadmap sections mapping, adding, editing
    const mapRoadmapThreadSectionData = (useState) =>
        useState.roadmapSection.map((section, sectionIndex) => (
            <ForumThreadInputFieldRoadmapSection
                key={sectionIndex}
                index={sectionIndex}
                handleSelectSectionType={handleSelectSectionType}
                onSectionInputChange={handleInputSectionChange}
                isSectionTypeProject={isSectionTypeProject}
                addRoadmapThreadSection={addRoadmapThreadSection}
                threadSectionBtnInput={section.roadmapSectionButton.map(
                    (btn, btnIndex) => (
                        <ForumThreadInputFieldRoadmapSectionButton
                            key={btnIndex}
                            btn={btn}
                            section={section}
                            sectionIndex={sectionIndex}
                            btnIndex={btnIndex}
                            onSectionInputBtnChange={
                                handleInputSectionBtnChange
                            }
                            addRoadmapThreadSectionBtn={
                                addRoadmapThreadSectionBtn
                            }
                        />
                    )
                )}
            />
        ));

    const handleInputSectionChange = (index, name, value) => {
        setRoadmapThreadData((prev) => ({
            ...prev,
            roadmapSection: prev.roadmapSection.map((section, i) =>
                i === index ? { ...section, [name]: value } : section
            ),
        }));
    };

    const addRoadmapThreadSection = () => {
        setRoadmapThreadData((prev) => ({
            ...prev,
            roadmapSection: [
                ...prev.roadmapSection,
                {
                    roadmapSectionType: "Courses",
                    roadmapSectionTitle: "",
                    roadmapSectionDescription: "",
                    roadmapSectionButton: [{}],
                },
            ],
        }));
    };
    // roadmap sections button handling, adding, editing
    const handleInputSectionBtnChange = (
        sectionIndex,
        btnIndex,
        name,
        value
    ) => {
        setRoadmapThreadData((prev) => ({
            ...prev,
            roadmapSection: prev.roadmapSection.map((section, i) =>
                i === sectionIndex
                    ? {
                          ...section,
                          roadmapSectionButton:
                              section.roadmapSectionButton.map((btn, j) =>
                                  j === btnIndex
                                      ? { ...btn, [name]: value }
                                      : btn
                              ),
                      }
                    : section
            ),
        }));
    };

    const addRoadmapThreadSectionBtn = (sectionIndex) => {
        setRoadmapThreadData((prev) => ({
            ...prev,
            roadmapSection: [
                ...prev.roadmapSection.map((section, index) =>
                    index === sectionIndex
                        ? {
                              ...section,
                              roadmapSectionButton: [
                                  ...section.roadmapSectionButton,
                                  {},
                              ],
                          }
                        : section
                ),
            ],
        }));
    };

    // handle inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (isThreadTypeRoadmap) {
            setRoadmapThreadData((prev) => ({
                ...prev,
                [name]: value,
            }));
        } else {
            setThreadData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior};

        isThreadTypeRoadmap
            ? fetch(`${process.env.REACT_APP_API_URL}/roadmap/createRoadmap`, {
                  method: "POST",
                  body: JSON.stringify(roadmapThreadData),
                  headers: new Headers({
                      "Content-Type": "application/json; charset=UTF-8",
                  }),
              })
            : fetch(
                  `${process.env.REACT_APP_API_URL}/forum/createForumThread`,
                  {
                      method: "POST",
                      body: JSON.stringify(threadData),
                      headers: new Headers({
                          "Content-Type": "application/json; charset=UTF-8",
                      }),
                  }
              );
    };

    return (
        <ForumThreadInputField
            onSubmit={handleSubmit}
            onChange={handleInputChange}
            clickBackButton={props.clickBackButton}
            onSelectChange={handleSelectThreadType}
            isThreadTypeRoadmap={isThreadTypeRoadmap}
            roadmapThreadDescription={mapRoadmapThreadDescriptionData(
                roadmapThreadData
            )}
            addRoadmapThreadDescription={addRoadmapThreadDescription}
            roadmapThreadSection={mapRoadmapThreadSectionData(
                roadmapThreadData
            )}
        />
    );
}
