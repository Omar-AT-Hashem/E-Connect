const upstachRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL
const authToken = process.env.UPSTASH_REDIS_REST_TOKEN

type Command = 'zrange' | 'sismember' | 'get' | 'smembers'

export async function fetchRedis(command: Command, ...args: (string | number)[]) {

    const commandUrl = `${upstachRedisRestUrl}/${command}/${args.join('/')}`

    const res = await fetch(commandUrl, {
        headers: {
            Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` 
        },
        cache: 'no-store'
    })

    if(!res.ok) {
        throw new Error(`Error executing Redis command: ${res.statusText}`)
    }

    const data = await res.json()
    return data.result
}