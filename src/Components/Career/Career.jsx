import { FaUsers, FaLaptopCode, FaPenNib, FaBullhorn } from "react-icons/fa";

const Career = () => {
  return (
    <div className="max-w-5xl mx-auto my-10 p-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-orange-500">
          Career at Dragon News 🐉
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Join our passionate team of journalists, writers, and developers
          shaping the future of digital news. At Dragon News, we believe in
          accuracy, creativity, and technology-driven storytelling.
        </p>
      </div>

      {/* Why Join */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-base-100 shadow-lg border rounded-2xl p-6 hover:shadow-xl transition">
          <FaPenNib className="text-4xl text-orange-500 mb-3" />
          <h2 className="text-xl font-semibold mb-2">
            Content Creators & Writers
          </h2>
          <p className="text-gray-600 text-sm">
            Share impactful stories with thousands of readers. We value your
            voice and creativity in shaping meaningful news experiences.
          </p>
        </div>

        <div className="bg-base-100 shadow-lg border rounded-2xl p-6 hover:shadow-xl transition">
          <FaLaptopCode className="text-4xl text-orange-500 mb-3" />
          <h2 className="text-xl font-semibold mb-2">
            Frontend & Web Developers
          </h2>
          <p className="text-gray-600 text-sm">
            Build beautiful, responsive, and fast experiences for our readers
            using React, Tailwind, and modern tools.
          </p>
        </div>

        <div className="bg-base-100 shadow-lg border rounded-2xl p-6 hover:shadow-xl transition">
          <FaUsers className="text-4xl text-orange-500 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Community Managers</h2>
          <p className="text-gray-600 text-sm">
            Connect with readers, handle feedback, and create a friendly and
            engaging environment for everyone.
          </p>
        </div>

        <div className="bg-base-100 shadow-lg border rounded-2xl p-6 hover:shadow-xl transition">
          <FaBullhorn className="text-4xl text-orange-500 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Marketing & Outreach</h2>
          <p className="text-gray-600 text-sm">
            Spread our stories across the web. Work with our creative and data
            teams to reach new audiences.
          </p>
        </div>
      </div>

      {/* Apply Section */}
      <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2 text-orange-600">
          Want to Join the Team?
        </h3>
        <p className="text-gray-600 mb-4">
          We’re always looking for passionate people who love news and
          innovation. Send your CV or portfolio to:
        </p>
        <a
          href="mailto:career@dragonnews.com"
          className="btn btn-outline btn-sm border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
        >
          career@dragonnews.com
        </a>
      </div>
    </div>
  );
};

export default Career;
