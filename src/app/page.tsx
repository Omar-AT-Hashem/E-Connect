import Button from '@/components/ui/Button'
import { db } from '@/lib/db'

export default async function Home() {

  await db.set('hello','hello')

  return (
    <main>
      <Button size={'lg'}>Hi</Button>
    </main>
  )
}
