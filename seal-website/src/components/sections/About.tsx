import React from "react";


const About = () => {
  const secureStorage = ["SEAL Vault"];
  const autofills = ["SEAL Autofill"];
  const sealAPI = ["SEAL API"];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative py-20 overflow-y-auto"
    >
      {/* Base starry background */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-[0.15] z-0" />

      {/* Brighter, larger stars */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_2px)] [background-size:200px_200px] opacity-[0.25] z-0" />

      <div className="max-w-3xl mt-50 mx-auto px-4 flex flex-col items-center text-center z-10">
        <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
          One click. Done.
        </h2>

        <div className="glass rounded-xl mt-5 p-8 border-[#FFFFFF] border max-w-2xl bg-[#121212]">
          <p className="text-gray-300 mb-6 text-center">
            Say goodbye to repetitive paperwork – SEAL securely stores your
            personal information and autofills official documents in seconds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all hover:bg-gradient-to-l hover:from-[#8BA4FF] hover:to-[#69D0E5] hover:bg-clip-text hover:text-transparent">
              <h3 className="text-xl font-bold mb-4">Secure Storage</h3>
              <div className="flex flex-wrap gap-2">
                {secureStorage.map((tech) => (
                  <div key={tech} className="flex items-center">
                    <div className="w-2 h-2 bg-[#69D0E5] rounded-full mr-2"></div>
                    <p className="text-gray-300">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all hover:bg-gradient-to-l hover:from-[#8BA4FF] hover:to-[#69D0E5] hover:bg-clip-text hover:text-transparent">
              <h3 className="text-xl font-bold mb-4">Automatic Autofill</h3>
              <div className="flex flex-wrap gap-2">
                {autofills.map((tech) => (
                  <div key={tech} className="flex items-center">
                    <div className="w-2 h-2 bg-[#69D0E5] rounded-full mr-2"></div>
                    <p className="text-gray-300">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all hover:bg-gradient-to-l hover:from-[#8BA4FF] hover:to-[#69D0E5] hover:bg-clip-text hover:text-transparent">
              <h3 className="text-xl font-bold mb-4">Business Integration</h3>
              <div className="flex flex-wrap gap-2">
                {sealAPI.map((tech) => (
                  <div key={tech} className="flex items-center">
                    <div className="w-2 h-2 bg-[#69D0E5] rounded-full mr-2"></div>
                    <p className="text-gray-300">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-70 text-center">
          <h2 className="text-4xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent leading-tight">
            At SEAL, we believe paperwork should be effortless. Our goal is to
            eliminate repetitive form-filling by securely storing your personal
            information and instantly autofilling documents.
          </h2>
        </div>

        {/* Values Section */}
        <div className="mt-50 w-full">
          <h2 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
            Our Values
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16">
            Our core values guide everything we do, ensuring a seamless
            experience for individuals and businesses alike.
          </p>

          <div className="glass rounded-xl p-8 border-[#FFFFFF] duration-300 bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Efficiency Card */}
              <div className="bg-[#121212] rounded-xl p-6 transition-all group">
                <div className="flex justify-center">
                  <img
                    src="/assets/icons/lightning_icon.png"
                    alt="Lightning Icon"
                    className="w-12 h-12 mb-6"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 transition-colors group-hover:bg-gradient-to-l group-hover:from-[#8BA4FF] group-hover:to-[#69D0E5] group-hover:bg-clip-text group-hover:text-transparent">
                  Efficiency
                </h3>
                <p className="text-gray-300">
                  Save time by automating tedious paperwork
                </p>
              </div>

              {/* Security Card */}
              <div className="bg-[#121212] rounded-xl p-6 transition-all group">
                <div className="flex justify-center">
                  <img
                    src="/assets/icons/vault_logo.png"
                    alt="Security Icon"
                    className="w-12 h-12 mb-6"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 transition-colors group-hover:bg-gradient-to-l group-hover:from-[#8BA4FF] group-hover:to-[#69D0E5] group-hover:bg-clip-text group-hover:text-transparent">
                  Security
                </h3>
                <p className="text-gray-300">
                  Your data is encrypted and stored on the blockchain
                </p>
              </div>

              {/* Simplicity Card */}
              <div className="bg-[#121212] rounded-xl p-6 transition-all group">
                <div className="flex justify-center">
                  <img
                    src = "/assets/icons/simple_icon.png"
                    alt="Simplicity Icon"
                    className="w-12 h-12 mb-6"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 transition-colors group-hover:bg-gradient-to-l group-hover:from-[#8BA4FF] group-hover:to-[#69D0E5] group-hover:bg-clip-text group-hover:text-transparent">
                  Simplicity
                </h3>
                <p className="text-gray-300">
                  A seamless experience for individuals and businesses
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-50 w-full">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
            Meet our team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {/* Sebastian Card */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 rounded-full overflow-hidden mb-8">
                <img
                  src="/assets/images/Sebastian_Perilla_About_Us.jpeg"
                  alt="Sebastian Perilla"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4">Sebastian Perilla</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                - Bachelor in Computer Science & AI<br></br>
                (IE University) 
              </p>
            </div>

            {/* Eliott Card */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 rounded-full overflow-hidden mb-8">
                <img
                  src="/assets/images/Eliott About Us.png"
                  alt="Eliott Lombard"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4">Eliott Lombard</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Bachelor in Business Administration<br></br>
                (IE University)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
