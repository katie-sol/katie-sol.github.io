import React from 'react';

const SkillRow = ({ skillName, iconRef, level }) => {
    const MAX_SKILL_LEVEL = 3;

    return (
        <div className="row__skill_card">
            <svg width="1.5rem" height="2rem" aria-hidden="true">
                <use href={iconRef} />
            </svg>
            <p>{skillName}</p>
            {}
            <div style={{ display: 'flex' }}>
                {Array.from({ length: MAX_SKILL_LEVEL }).map((_, index) => (
                    <span
                        key={index}
                        className={`skill-circle ${index < level ? 'filled' : ''}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default function Skills() {
    return (
        <section>
            <h2 className="centered">Skills</h2>
            <div className="container">
                <div className="card__three_column">
                    
                    {}
                    <div className="skill-card">
                        <h3>Languages</h3>
                        <SkillRow skillName="Python" iconRef="/img/icons/python.svg" level={2} />
                        <SkillRow skillName="Java" iconRef="/img/icons/java.svg" level={1} />
                        <SkillRow skillName="HTML" iconRef="/img/icons/brand-html5.svg" level={1} />
                        <SkillRow skillName="CSS" iconRef="/img/icons/brand-css3.svg" level={1} />
                    </div>

                    {}
                    <div className="skill-card">
                        <h3>Tools</h3>
                        <SkillRow skillName="VS Code" iconRef="/img/icons/brand-vscode.svg" level={3} />
                        <SkillRow skillName="Unity" iconRef="/img/icons/unity.svg" level={1} />
                        <SkillRow skillName="PyGame" iconRef="/img/icons/python.svg" level={1} />
                    </div>

                    {}
                    <div className="skill-card">
                        <h3>Frameworks</h3>
                        <SkillRow skillName="Node.js" iconRef="/img/icons/brand-nodejs.svg" level={1} />
                    </div>

                </div>
            </div>
        </section>
    );
}