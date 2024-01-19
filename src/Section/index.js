import "./style.css";

const Section = ({title, body, extraHeadeContent}) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__tittle">{title}</h2>
            {extraHeadeContent}
        </header>

        <div className="section__window">
            {body}
        </div>
    </section>
);

export default Section;