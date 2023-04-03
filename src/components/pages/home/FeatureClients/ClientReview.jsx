import React from 'react';


const ClientReview = ({name, description, rating, photo, post}) => {
    return (
        <div className=' flex flex-col justify-between'>
            <div className='flex py-8 px-8'>
                {
                    Array(5)
                        .fill()
                        .map((_, i) => (
                            <p className=' w-7 h-7 flex justify-center items-center text-sm text-green'>
                                <svg data-v-779a88fd="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-label="star" role="presentation" className="h-icon-success" fill='#673de6' style={{ width: "30px", height: "30px" }}><g data-v-779a88fd=""><path data-v-779a88fd="" d="M4.28972 21.9983C4.60518 20.7642 4.90881 19.5758 5.21301 18.388C5.58762 16.9254 5.96054 15.4623 6.34248 14.0014C6.38304 13.8467 6.34867 13.7607 6.23038 13.6607C4.21029 11.9625 2.19415 10.2603 0.177447 8.55875C0.127875 8.51687 0.0822455 8.47108 0 8.39513C0.362781 8.36832 0.680497 8.34208 0.998775 8.32197C3.16758 8.1818 5.33694 8.04275 7.50574 7.90314C7.70009 7.89085 7.895 7.86237 8.08879 7.86684C8.27187 7.87075 8.36256 7.80597 8.43185 7.63229C9.40471 5.18406 10.3855 2.73918 11.3651 0.293743C11.3983 0.211093 11.4344 0.12956 11.4896 0C11.5358 0.105546 11.5684 0.173677 11.5966 0.243483C12.583 2.70232 13.5711 5.1606 14.5496 7.62224C14.6222 7.80485 14.7163 7.85734 14.9073 7.86851C16.6429 7.9735 18.3774 8.09133 20.1124 8.2047C20.8977 8.25607 21.6829 8.30522 22.4682 8.35604C22.6248 8.36609 22.7814 8.37837 22.9375 8.3901C22.9583 8.41523 22.9792 8.4398 23 8.46493C22.9425 8.4923 22.8766 8.50961 22.8293 8.54926C20.8211 10.238 18.8156 11.9301 16.8046 13.6155C16.6496 13.745 16.5984 13.8534 16.653 14.0634C17.3206 16.6261 17.9746 19.1916 18.632 21.7571C18.6483 21.8213 18.6607 21.8861 18.6849 21.9933C18.5824 21.9324 18.5092 21.8911 18.4382 21.8464C16.1905 20.4347 13.9417 19.0246 11.698 17.6067C11.5386 17.5062 11.4338 17.5151 11.2811 17.6117C9.04249 19.024 6.80046 20.4302 4.55843 21.8375C4.48294 21.885 4.40577 21.9302 4.29028 22L4.28972 21.9983Z"></path></g></svg>
                            </p>
                        ))
                }
            </div>
            <p className=' text-sm px-8 py-4'>{description}</p>
            <button className=' flex justify-start py-8 mb-28 font-medium text-primary px-8 hover:text-blue'>Read the full story</button>
            <div className=' w-full px-8 py-6 flex items-center gap-2 absolute bottom-0 bg-lightGray
            '>
                <div className='w-[70px] h-[70px] flex justify-center rounded-full
                '>
                    <img src={photo} alt="person" className=' w-full rounded-full' />
                </div>
                <div>
                    <h1 className=' text-xl font-medium text-primary'>{name}</h1>
                    <p className=' text-sm text-primary'>{post}</p>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;