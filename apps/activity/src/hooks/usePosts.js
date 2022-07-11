import { getPosts } from 'lib/services'
import { useEffect, useState } from "preact/compat"

const usePosts = () => {
    const [data, setData] = useState([[],[],[]])
    const [isLoading, setIsLoading] = useState(true)

    useEffect( async () => {
        setIsLoading(true)
        const res = await getPosts({
            limit: 15
        })
        const posts = [[],[],[]]
        res.data?.data.forEach((item, i) => {
            if (i < 5) {
                posts[0].push({
                    ...item,
                    time: (i+1)+'h'
                })
            } else if (i < 9) {
                posts[1].push({
                    ...item,
                    time: (i-4)+'w'
                })
            } else {
                posts[2].push({
                    ...item,
                    time: (i)+'w'
                })
            }
        });
        setIsLoading(false)
        setData(posts)
    }, [])

    return {
        data,
        isLoading
    }
}

export default usePosts