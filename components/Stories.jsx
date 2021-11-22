import faker from 'faker'
import { useEffect,useState } from 'react'
import Story from './Story';

const Stories = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        setUserData(
            [...Array(20)].map((_, i) => (
                {
                    ...faker.helpers.contextualCard(),
                    i
                }
            ))
        )
    }, [])
    console.log(userData);
    return (
        <div className="flex items-center overflow-x-scroll space-x-3 bg-white h-28 pt-[5px] px-2 scrollbar-hide  " >
            {
                userData.map((user) => (
                    <Story
                        key={user.i}
                        photo={user?.avatar}
                        userName={user?.username}
                    />
                ))
            }
        </div>
    )
}

export default Stories
