import { useGetAllBlogs } from "../service/FetchAllBlogs";

function DashboardPage() {
  const {} = useGetAllBlogs
  return <>This is your personal dashboard</>;
}

export default DashboardPage;
