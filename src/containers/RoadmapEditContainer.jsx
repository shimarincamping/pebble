import React, { useState, useEffect } from "react";
import RoadmapPostInputHeader from "../components/RoadmapPostInputHeader";
import RoadmapEditDescription from "../components/RoadmapEditDescription";
import RoadmapEditSection from "../components/RoadmapEditSection";
import RoadmapEditButton from "../components/RoadmapEditButton";
import { useParams } from "react-router-dom";

export default function RoadmapEditContainer({ roadmap, clickBackButton }) {
    const [roadmapThreadData, setRoadmapThreadData] = useState({
        threadType: "roadmap",
        roadmapThreadTitle: "",
        roadmapThreadAuthor: "",
        roadmapProfileImageLink: "",
        roadmapBannerImageLink: "",
        roadmapDescription: [{ roadmapDescriptionTitle: "", roadmapDescriptionContent: "" }],
        roadmapSection: [
            {
                roadmapSectionType: "Courses",
                roadmapSectionTitle: "",
                roadmapSectionDescription: "",
                roadmapSectionButton: [{
                    buttonTitle: "",
                    buttonAuthor: "",
                    buttonLink: "",
                    buttonImage: "",
                }],
            },
        ],
    });

    const [isSectionTypeProject, setIsSectionTypeProject] = useState(false);
    const { id } = useParams();

    const addRoadmapDescription = () => {
        setRoadmapThreadData((prev) => ({
            ...prev,
            roadmapDescription: [
                ...prev.roadmapDescription,
                { roadmapDescriptionTitle: "", roadmapDescriptionContent: "" },
            ],
        }));
    };
    

    useEffect(() => {
        if (roadmap) {
            const updatedData = {
                threadType: "roadmap",
                roadmapThreadTitle: roadmap.roadmapThreadTitle || "",
                roadmapThreadAuthor: roadmap.roadmapThreadAuthor || "",
                roadmapProfileImageLink: roadmap.roadmapProfileImageLink || "",
                roadmapBannerImageLink: roadmap.roadmapBannerImageLink || "",
                roadmapDescription: roadmap.roadmapDescription || [{ roadmapDescriptionTitle: "", roadmapDescriptionContent: "" }],
                roadmapSection: roadmap.roadmapSection?.map(section => ({
                    ...section,
                    roadmapSectionButton: section.roadmapSectionButton ? [...section.roadmapSectionButton] : [],
                })) || [{ roadmapSectionButton: [] }]
            };
            setRoadmapThreadData(updatedData);
        }
    }, [roadmap]);
    
    

    const handleInputChange = (name, value) => {
        setRoadmapThreadData((prev) => {
            const keys = name.split(".");
            if (keys.length === 1) {
                return { ...prev, [name]: value };
            }
    
            const [field, index, subfield] = keys;
            if (field === "roadmapDescription") {
                return {
                    ...prev,
                    roadmapDescription: prev.roadmapDescription.map((desc, i) =>
                        i === Number(index) ? { ...desc, [subfield]: value } : desc
                    ),
                };
            }
    
            return prev;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("jwtToken");
        const endpoint = `${process.env.REACT_APP_API_URL}/roadmap/${id}/editRoadmap`;
    
        try {
            const response = await fetch(endpoint, {
                method: "PUT",
                body: JSON.stringify(roadmapThreadData),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    Authorization: `Bearer ${token}`,
                },
            });
    
            if (response.ok) {
                alert("Successfully edited roadmap post!");
                clickBackButton();
                window.location.href = `/roadmap/${id}`;
            } else {
                console.error("Failed to update roadmap post.");
            }
        } catch (error) {
            console.error("Error updating roadmap post:", error);
        }
    };
    

    const onRemoveDescription = (indexToRemove) => {
        setRoadmapThreadData((prev) => ({
            ...prev,
            roadmapDescription: prev.roadmapDescription.filter((_, index) => index !== indexToRemove),
        }));
    };
    
    const mapRoadmapThreadDescriptionData = (data) =>
        data.roadmapDescription.map((description, index) => (
            <RoadmapEditDescription
                key={index}
                index={index}
                descriptionData={description}
                onDescriptionInputChange={(index, name, value) =>
                    setRoadmapThreadData((prev) => ({
                        ...prev,
                        roadmapDescription: prev.roadmapDescription.map((desc, i) =>
                            i === index ? { ...desc, [name]: value } : desc
                        ),
                    }))
                }
                addRoadmapDescription={addRoadmapDescription}
                onRemoveDescription={onRemoveDescription} // Passing the remove function
            />
        ));
    

        const mapRoadmapThreadSectionData = (data) =>
            data.roadmapSection.map((section, sectionIndex) => {        
                return (
                    <RoadmapEditSection
                        key={sectionIndex}
                        index={sectionIndex}
                        section={section}
                        handleSelectSectionType={(index, name, value) => {
                            setRoadmapThreadData((prev) => ({
                                ...prev,
                                roadmapSection: prev.roadmapSection.map((sec, i) =>
                                    i === index ? { ...sec, [name]: value } : sec
                                ),
                            }));
                            setIsSectionTypeProject(value === "roadmapSectionProjects");
                        }}
                        onSectionInputChange={(index, name, value) =>
                            setRoadmapThreadData((prev) => ({
                                ...prev,
                                roadmapSection: prev.roadmapSection.map((sec, i) =>
                                    i === index ? { ...sec, [name]: value } : sec
                                ),
                            }))
                        }
                        isSectionTypeProject={isSectionTypeProject}
                        threadSectionBtnInput={section.roadmapSectionButton?.map((btn, btnIndex) => {        
                            return (
                                <RoadmapEditButton
                                    key={btnIndex}
                                    btn={btn}
                                    section={section}
                                    sectionIndex={sectionIndex}
                                    btnIndex={btnIndex}
                                    onSectionInputBtnChange={(sectionIndex, btnIndex, name, value) =>
                                        setRoadmapThreadData((prev) => ({
                                            ...prev,
                                            roadmapSection: prev.roadmapSection.map((sec, i) =>
                                                i === sectionIndex
                                                    ? {
                                                          ...sec,
                                                          roadmapSectionButton: sec.roadmapSectionButton.map(
                                                              (button, j) =>
                                                                  j === btnIndex ? { ...button, [name]: value } : button
                                                          ),
                                                      }
                                                    : sec
                                            ),
                                        }))
                                    }
                                />
                            );
                        })}
                    />
                );
            });
        
    return (
        <RoadmapPostInputHeader
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            onClose={clickBackButton}
            roadmapThreadData={roadmapThreadData}
            roadmapThreadDescription={mapRoadmapThreadDescriptionData(roadmapThreadData)}
            roadmapThreadSection={mapRoadmapThreadSectionData(roadmapThreadData)}
        />
    );
}
