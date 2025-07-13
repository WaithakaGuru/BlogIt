import { useGetAllBlogs } from "../service/FetchAllBlogs";

function DashboardPage() {
  const {data} =  useGetAllBlogs()
  return(
    <>
    {data.id}
    </>
  )
}

export default DashboardPage;
