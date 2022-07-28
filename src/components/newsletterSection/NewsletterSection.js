import HubspotForm from 'react-hubspot-form';

const NewsletterSection = () => {
    return (
        <section className="newsletterSection">
            <div className="wrap" id="newsletter">
                <p>UP TO DATE</p>
                <div className="newsletterSection__textAndInputArea">
                    <div className="newsletterSection__textAndInputArea__text">
                        <h3>Werde jetzt Teil des</h3>
                        <h3>
                            <span className="headlines_stroke">
                                Super(Code)-Kosmos
                            </span>{" "}
                            und sei{" "}
                            <span className="circle">
                                immer auf dem neusten
                            </span>{" "}
                            Stand! Mit unserem Newsletter bekommst du regelmäßig
                            die{" "}
                            <span className="headlines_stroke">
                                spannendesten News
                            </span>{" "}
                            sowie{" "}
                            <span className="headlines_stroke">
                                Eventankündigungen
                            </span>{" "}
                            direkt in dein Postfach!
                        </h3>
                    </div>
                    <div className="newsletterSection__textAndInputArea__input">
                        <HubspotForm 
                            region="na1"
                            portalId="5807040"
                            formId="9384135a-d6de-4c51-9497-c2d167e58afd"
                            onSubmit={() => console.log('Submit!')}
                            onReady={(form) => console.log('Form ready!')}
                            loading={<div>Es lädt...</div>}
                        />
                        {/* <label htmlFor="inputNewsletter">
                            <img src="img/arrow-right.svg" alt="" />
                        </label>
                        <input
                            type="email"
                            name="inputNewsletter"
                            id="inputNewsletter"
                            placeholder="E-Mail"
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
