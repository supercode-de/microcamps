import { useState } from "react";

const PricingSection = () => {
    const [todayFilter, setTodayFilter] = useState("today");
    const handleChange = (event) => {
        setTodayFilter(event.target.value);
    };
    return (
        <section className="pricingSection" id="pricingSection">
            <div className="wrap">
                <article className="pricingSection__headline">
                    <p>Pricing</p>
                    <h3>Change your life,</h3>
                    <h3>become a UX/UI Designer</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In malesuada facilisis orci nunc. Pellentesque semper ut
                        lobortis elementum morbi. Neque ultrices dui egestas sit
                        et a. Nec, eget mi purus nec sollicitudin pellentesque
                        euismod.
                    </p>
                </article>
                <article className="pricingSection__pricingContent">
                    <div className="pricingSection__pricingContent__filter">
                        <input
                            className="hidden"
                            value="today"
                            checked={todayFilter === "today"}
                            onChange={handleChange}
                            type="radio"
                            name="filterPricing"
                            id="todayInput"
                        />
                        <label
                            className="inputLabel todayLabel"
                            htmlFor="todayInput"
                        >
                            <p>Zahle heute</p>
                        </label>
                        <input
                            className="hidden"
                            value="month"
                            checked={todayFilter === "month"}
                            onChange={handleChange}
                            type="radio"
                            name="filterPricing"
                            id="monthInput"
                        />
                        <label
                            className="inputLabel monthLabel"
                            htmlFor="monthInput"
                        >
                            <p>Zahle monatlich</p>
                        </label>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default PricingSection;
