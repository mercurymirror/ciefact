// import React, { useState, useEffect } from "react";
// import { fetchAPI } from "../lib/api"
// import Select from "react-select";
// import { useQuery, useQueryClient } from 'react-query'

// const getSpectacles = async (key) => {
//     const categoryId = key.queryKey[1].category

//     if (categoryId) {
//         const res = await Promise.all([
//             fetchAPI(`/spectacles?categories.id=${categoryId}`),
//         ])
//         return res.json()
//     }
//     const res = await Promise.all([
//         fetchAPI("/spectacles"),
//     ])
//     return res.json()
// }

// const SubMenu = ({ categories, spectacles }) => {

//     const queryClient = useQueryClient();
//     const [categoryId, setCategoryId] = useState(null)
//     const { data, status } = useQuery(['spectacles', { category: categoryId }], getSpectacles, { initialData: spectacles })


//     const handleCategories = value => {
//         console.log(value);
//     }

//     return (
//         <>
//             <ul className="sous-menu">
//                 <Select
//                     getOptionLabel={option => `${option.name}`}
//                     getOptionValues={option => `${option.id}`}
//                     options={categories}
//                     instanceId="categories"
//                     onChange={value => setCategoryId(value.id)}
//                 />
//                 {categories.map((cat) => (
//                     <li key={cat.id}>
//                         <a>
//                             {cat.name}
//                         </a>
//                     </li>

//                 ))}
//             </ul>
//         </>
//     )
// }

// export async function getStaticProps() {
//     // Run API calls in parallel
//     const spectacles = await Promise.all([
//         fetchAPI("/spectacles"),
//     ])

//     return {
//         props: { spectacles },
//         revalidate: 1,
//     }
// }

// export default SubMenu