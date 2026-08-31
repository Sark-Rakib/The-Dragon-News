import React from "react";

const About = () => {
  return (
    <div className="p-15">
      <p>
        <span className="font-semibold text-accent text-2xl">D</span>ragon News
        is a modern React-based news web application designed to deliver
        dynamic, real-time news content in an engaging and user-friendly
        interface. The project showcases clean UI design, responsive layouts,
        and smooth animations using Tailwind CSS, DaisyUI, and React Icons.
      </p>
      <br />
      <p>Each card presents essential details of a news item such as:</p>

      <ul className="list-disc pl-6 space-y-1 text-base-content/80">
        <li>🧑‍💼 Author information (name, profile image, published date)</li>
        <li>🖼️ Thumbnail image of the news</li>
        <li>📰 Headline and short description</li>
        <li>⭐ Rating system using stars</li>
        <li>👁️ Total view count</li>
        <li>🔖 Bookmark and Share icons</li>
        <li>🔗 A “Read More” button for navigation to full article details</li>
        <li>
          🎢 Marquee animation displaying tags or trending topics for a dynamic,
          engaging experience
        </li>
      </ul>
      <br />
      <p>
        The app is designed with a strong focus on readability, reusability, and
        real-world UI patterns. It’s ideal for showcasing skills in
        component-based architecture, responsive design, and modern frontend
        practices.
      </p>
      <br />
      <h2 className="font-semibold text-accent">⚙️ Key Features</h2>

      <ul className="list-disc pl-6 space-y-1 text-base-content/80">
        <li>Clean, card-based layout with DaisyUI components</li>
        <li>Interactive bookmark and share buttons</li>
        <li>Auto-formatted publish date</li>
        <li>Dynamic rating visualization</li>
        <li>“Read More” expandable preview</li>
        <li>
          Fully customizable — you can extend it with animations or modals
        </li>
      </ul>
      <br />
      <h2 className="font-semibold text-accent">🧩 Tech Stack</h2>

      <ul className="list-disc pl-6 space-y-1 text-base-content/80">
        <li>React (for component-based UI)</li>
        <li>Tailwind CSS + DaisyUI (for styling)</li>
        <li>React Icons (for icons like eye, star, bookmark, share)</li>
      </ul>
    </div>
  );
};

export default About;
