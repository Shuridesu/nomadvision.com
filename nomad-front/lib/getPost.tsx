export default async function getPost(postSlug:string) {
    const res = await fetch(`http://127.0.0.1:8000/posts/${postSlug}`,{
      next:{revalidate:10}})
    if(!res.ok)return undefined
  return res.json()
}
