export default async function getPost(postSlug:string) {
    const res = await fetch(`https://nomadvision-e83b637ecb0f.herokuapp.com/posts/${postSlug}`,{
      next:{revalidate:10}})
    if(!res.ok)return undefined
  return res.json()
}
