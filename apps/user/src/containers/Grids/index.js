import { FontAwesomeIcon } from "../../components/FontAwesomeIcon"
import { getUser } from 'lib/services'
import { createResource } from "solid-js";
import Spinner from "../../components/Spinner";

const fetchUser = async () => {
    const res = await getUser({
        userId: '60d0fe4f5311236168a109ca',
        limit: 24
    })
    return res.data.data
}

const Grids = () => {
    const [data] = createResource(fetchUser, {
        initialValue: []
    });

    return (
        <div class="mt-5">
            <div class="flex mb-2">
                <div class="flex justify-center w-full py-3 border-b border-b-black cursor-pointer">
                    <FontAwesomeIcon class="text-black text-2xl" icon="fas table-cells" />
                </div>
                <div class="flex justify-center w-full py-3 cursor-pointer">
                    <FontAwesomeIcon class="text-black text-2xl" icon="fas users-rectangle" />
                </div>
            </div>
            <div class="flex flex-wrap">
                {data()?.map(post => {
                    return (
                        <div class="w-[33.3333%] p-[1.5px]">
                            <div class="pb-[100%] relative">
                                <img class="object-cover absolute top-0 left-0 w-full h-full" alt=" " src={post.image} />
                            </div>
                        </div>
                    )
                })}
            </div>
            {
                data.loading && (
                    <div class="mt-6">
                        <Spinner />
                    </div>
                )
            }
        </div>
    )
}

export default Grids