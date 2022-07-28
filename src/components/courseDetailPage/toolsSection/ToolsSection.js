import ToolsOneTool from "./ToolsOneTool";

const ToolsSection = ({ tools }) => {
    return (
        <section className="toolsSection" id="toolsSection">
            <div className="wrap">
                <article className="toolsSection__headline">
                    <p>Bootcamp Tools</p>
                    <h3>Change your life,</h3>
                    <h3>become a UX/UI Designer</h3>
                    <p>
                        Our bootcamps are designed around the latest UX/UI
                        design tools. Unlike corporate courses that have a fixed
                        tool-stack from decades past, we believe it's important
                        to equip designers with the latest tool-stack to excel
                        in their career.
                    </p>
                </article>
                <article className="toolsSection__toolList">
                    {tools.map((tool) => {
                        return <ToolsOneTool tool={tool} />;
                    })}
                </article>
            </div>
        </section>
    );
};

export default ToolsSection;
