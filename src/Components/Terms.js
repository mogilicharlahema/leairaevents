import React from "react";
import "../Styles/terms.css";

const TermsAndConditionsSection = () => {
    return (
        <div className="terms-container-wrapper">
            <div className="terms-content">
                <h1 className="main-title">Terms and Conditions</h1>

                <section className="terms-section">
                    <h2 className="section-title">Terms and Conditions for Clients</h2>
                    <ol className="terms-list">
                        <li>When it comes to the successful execution of events including items and artists that the Le Aira Events provides, the company bears limited liability.</li>
                        <li>If a certain product, artist, or category has caused a troublesome scenario, Le Aira Events will be responsible for handling and resolving the issue by partially or totally replacing or refunding that particular category.</li>
                        <li>The products are compatible with Le Aira Events. In pictures may not be entirely accurate.</li>
                        <li>The artist's performance on the day of events is not directly under the control of Le Aira Events.</li>
                        <li>Le Aira Events is not liable for any misconduct on the part of any specific artist or supplier at the event. Le Aira Events will simply assist the client in doing the required steps.</li>
                        <li>Le Aira Events is not liable for any legal or venue permissions that may be needed. Permissions should be handled by the client. For instance: drone, sound system, fireworks, liquor, event hall royalty/permission, etc.</li>
                        <li>Le Aira will not cover any kind of royalties or service fees for any event-related matters. For instance, DJ authorization, hall royalty, etc.</li>
                        <li>Le Aira Events payment will be given without altering our terms and conditions if the event fails for any reason, including customer personal issues, natural disasters, government problems, permissions, etc. without any exceptions.</li>
                        <li>The customer is in charge of coordinating with the location or relevant individuals/department and provide the necessary time to put up or decorate the goods for the event.</li>
                        <li>Le Aira Events is not liable for any venue damage that occurs during the event.</li>
                        <li>Even after suppliers have taken the necessary precautions, customers are still responsible for their own safety and the safety of their guests in the event of minor mishaps at the location.</li>
                    </ol>
                </section>

                <section className="terms-section">
                    <h2 className="section-title">Conditions of Use (Suppliers)</h2>
                    <ol className="terms-list">
                        <li>The authenticity of the images that the supplier uploads is entirely the supplier's obligation Le Aira Events is in no way legally liable.</li>
                        <li>Le Aira Eventsis fully authorized to update and post any event-related merchandise to its website using its banner.</li>
                        <li>Promoting any individual's brand on the Le Aira Events website is strictly forbidden. Only Le Aira Events Pvt Ltd. is granted all rights.</li>
                        <li>LE Aira Events Pvt Ltd has the right to transfer the specific order to another Supplier in order to ensure the event is successful if the Supplier declines to confirm the order because of his unavailability or any other problems.</li>
                        <li>Le Aira Events has complete authority over the deactivation or removal of supplier products and accounts from its website.</li>
                    </ol>
                </section>
            </div>
        </div>
    );
}

export default TermsAndConditionsSection;