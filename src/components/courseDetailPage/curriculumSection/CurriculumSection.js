import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { useState } from "react";
import styled from "@emotion/styled";

const CurriculumSection = () => {
    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        borderRadius: "25px",
        padding: "5px",
        fontFamily: "var(--ff-reg-regular)",
        backgroundColor: "var(--clr-super-green)",
        "&:not(:first-of-type)": {
            margin: "2% 0 0 0",
        },
        "&:before": {
            display: "none",
        },
    }));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={
                <ArrowForwardIosSharpIcon
                    sx={{
                        fontSize: "1.2rem",
                        color: "var(--clr-super-lila)",
                    }}
                />
            }
            {...props}
        />
    ))(({ theme }) => ({
        flexDirection: "row-reverse",
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
        },
        "& .MuiAccordionSummary-content": {
            marginLeft: "1%",
            justifyContent: "space-between",
        },
    }));

    const [expanded, setExpanded] = useState("");
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <section className="curriculumSection" id="curriculumSection">
            <div className="wrap">
                <article className="curriculumSection__introArticle">
                    <div className="curriculumSection__introArticle__textWrap">
                        <div className="curriculumSection__introArticle__headline">
                            <p>UX/UI Curriculum</p>
                            <h3>Learn-by-doing with</h3>
                            <h3>live classes</h3>
                        </div>
                        <div className="curriculumSection__introArticle__text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Massa pellentesque sit id
                                quisque. Ipsum ut pulvinar lorem at dolor nullam
                                arcu velit.{" "}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Massa pellentesque sit id
                                quisque. Ipsum ut pulvinar lorem at dolor nullam
                                arcu velit. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Massa pellentesque
                                sit id quisque. Ipsum ut pulvinar lorem at dolor
                                nullam arcu velit.{" "}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Massa pellentesque sit id
                                quisque. Ipsum ut pulvinar lorem at dolor nullam
                                arcu velit.
                            </p>
                        </div>
                    </div>
                    <img src="/img/curriculumPic1.png" alt="Supercode People" />
                </article>
                <article className="curriculumSection__introArticle">
                    <img src="/img/curriculumPic2.png" alt="Supercode People" />
                    <div className="curriculumSection__introArticle__textWrap">
                        <div className="curriculumSection__introArticle__headline">
                            <h3>Create UX/UI case studies </h3>
                            <h3>from real design briefs</h3>
                        </div>
                        <div className="curriculumSection__introArticle__text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Massa pellentesque sit id
                                quisque. Ipsum ut pulvinar lorem at dolor nullam
                                arcu velit.{" "}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Massa pellentesque sit id
                                quisque. Ipsum ut pulvinar lorem at dolor nullam
                                arcu velit. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Massa pellentesque
                                sit id quisque. Ipsum ut pulvinar lorem at dolor
                                nullam arcu velit.{" "}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Massa pellentesque sit id
                                quisque. Ipsum ut pulvinar lorem at dolor nullam
                                arcu velit.
                            </p>
                        </div>
                    </div>
                </article>
                <article className="curriculumSection__curriculumView">
                    <div className="curriculumSection__curriculumView__introText">
                        <h4>10 weeks | Teilzeit</h4>
                        <p>
                            Our Part-time Bootcamp is an immersive 10 weeks.
                            You'll be joining 20 Designers from around the world
                            and jumping into live classes Monday and Wednesday.
                        </p>
                    </div>
                    <div className="curriculumSection__curriculumView__arccordion">
                        <Accordion
                            expanded={expanded === "panel1"}
                            onChange={handleChange("panel1")}
                        >
                            <AccordionSummary
                                aria-controls="panel1d-content"
                                id="panel1d-header"
                            >
                                <Typography className="headline">
                                    Collapsible Group Item #1
                                </Typography>
                                <Typography className="time">
                                    Pre-Bootcamp
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === "panel2"}
                            onChange={handleChange("panel2")}
                        >
                            <AccordionSummary
                                aria-controls="panel2d-content"
                                id="panel2d-header"
                            >
                                <Typography className="headline">
                                    Collapsible Group Item #1
                                </Typography>
                                <Typography className="time">
                                    Pre-Bootcamp
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === "panel3"}
                            onChange={handleChange("panel3")}
                        >
                            <AccordionSummary
                                aria-controls="panel2d-content"
                                id="panel2d-header"
                            >
                                <Typography className="headline">
                                    Collapsible Group Item #1
                                </Typography>
                                <Typography className="time">
                                    Pre-Bootcamp
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === "panel4"}
                            onChange={handleChange("panel4")}
                        >
                            <AccordionSummary
                                aria-controls="panel2d-content"
                                id="panel2d-header"
                            >
                                <Typography className="headline">
                                    Collapsible Group Item #1
                                </Typography>
                                <Typography className="time">
                                    Pre-Bootcamp
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default CurriculumSection;
