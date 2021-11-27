import { useEffect, useState } from "react";
import faker from "faker";
import Follow from "./Follow";
const Suggestion = () => {
    const [fakeData, setFakeData] = useState([]);
    useEffect(() => {
        setFakeData(
            [...Array(5)].map((_, i) => (
                {
                    i,
                    ...faker.helpers.contextualCard(),
                }
            ))
        );
    }, []);
    return (
        <div className="flex flex-col mt-7 " >
            <div className="flex items-center justify-between mb-3 p-1 ">
                <h1 className="font-normal text-gray-400 " >Recommendation for you </h1>
                <h1 className="font-normal text-gray-900 " >See All</h1>
            </div>
            {
                fakeData.map((profile)=>(
                    <Follow
                        key={profile?.id}
                        photo={profile?.avatar}
                        username={profile?.username}
                        workAt={profile.company.name}
                    />
                ))
            }
            
        </div>
    )
}

export default Suggestion
