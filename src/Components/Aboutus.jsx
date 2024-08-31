const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img src="/sankey.svg" alt="Sankey Diagram" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-lg text-gray-600 mb-6">
    Our platform offers you a seamless way to track your job applications and build a professional portfolio. Plus, our team of skilled virtual assistants is here to take the stress out of job searching by handling the research and applications for you.
</p>


          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
             <div className="flex items-start">
              <div className="text-2xl text-primary mr-4">📊</div>
              <div>
                <h4 className="font-bold mb-2">WHY SANKEY-DIAGRAM?</h4>
                <p className="text-gray-600">
                  Because Data is Beautiful. <br/>
                  At the end of the service, we provide you with a PNG/SVG version of a graph detailing the jobs we have applied to and the process flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
