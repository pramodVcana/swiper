import React,{useState, useEffect} from 'react'
import axios from 'axios'



const App = () => {
  const [data, setData] = useState([])
 const [filteredData, setFilteredData] = useState([]);
 const [filters, setFilters] = useState({
  
 });
const fecthData = async() => {


  try {
    const data = await axios('https://jsonplaceholder.typicode.com/users')

    console.log(data)

    setData([...data.data, ...data.data, ...data.data]);
    setFilteredData([...data.data, ...data.data,...data.data]);

    

  } catch (err) {
console.log(err)
  }
  
}

useEffect(() => {
  const filtered = data.filter((item) => {
    return (
      (!filters.company || item.company.name === filters.company) &&
      (!filters.name || item.name === filters.name) &&
      (!filters.city || item.address.city === filters.city) 
      // (!filters.from_date ||
      //   new Date(item.from_date).getTime() >=
      //     new Date(filters.from_date).getTime()) &&
      // (!filters.to_date ||
      //   new Date(item.to_date).getTime() <= new Date(filters.to_date).getTime())
    );
  });
  setFilteredData(filtered);
}, [filters]);


const filterHandler = (e) => {
  console.log(e.target.value)



  setFilters((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  }
  
useEffect(() => {
fecthData()
},[])


  return (
    <section className="m-2">
      <div className="space-y-3">
        {/* Top Header */}
        {/* <div className="flex gap-3 justify-end">
            <div className="relative">
              {shiftList
                .filter((e) => e.status === "Pending")
                .map((a) => {
                  return (
                    <span class="absolute right-0 -top-1 h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-sky-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-4 w-4 bg-[red]"></span>
                    </span>
                  );
                })}

              <button
                onClick={() => {
                  setSide1(!side1);
                }}
                className="text-xs w-56 2xl:text-lg bg-black text-white px-3 py-2 rounded"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenteredScrollable"
              >
                Change Shift Request
              </button>
            </div>
            <button
              onClick={() => {
                setSide(!side);
                setEdit(false);
              }}
              className="text-xs w-1/8 2xl:text-lg bg-black text-white px-3 py-2 rounded"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenteredScrollable"
            >
              Add Shift
            </button>
          </div> */}
        <div className="bg-white border-b md:space-y-0 space-y-2 border-gray-200 shadow md:flex items-center justify-between p-2 rounded">
          <div className="">
            <h2 className="font-semibold 2xl:text-xl">Attendance</h2>
          </div>
          <div className="md:flex  md:space-y-0 space-y-3 items-center md:space-x-5">
            <div class=" ">
              <select
                id="grid-last-name"
                value={filters.name}
                name="name"
                onChange={filterHandler}
              >
                <option value="">--Select name---</option>
                <option value="">--Select All---</option>
                {data.map((a) => {
                  return <option value={a.name}>{a.name}</option>;
                })}
              </select>
            </div>
            <div class=" ">
              <select
                id="grid-last-name"
                value={filters.city}
                name="city"
                onChange={filterHandler}
              >
                <option value="">--Select city---</option>
                <option value="">--Select All---</option>
                {data.map((a) => {
                  return (
                    <option value={a.address.city}>{a.address.city}</option>
                  );
                })}
              </select>
            </div>{" "}
            <div class=" ">
              <select
                id="grid-last-name"
                value={filters.company}
                name="company"
                onChange={filterHandler}
              >
                <option value="">--Select company---</option>
                <option value="">--Select All---</option>
                {data.map((a) => {
                  return (
                    <option value={a.company.name}>{a.company.name}</option>
                  );
                })}
              </select>
            </div>
            <span className="flex border rounded border-[#0000001c] p-[4px] 2xl:p-[7px] px-1 bg-gray-50 items-center">
              <input
                placeholder="Search Here..."
                className="placeholder:text-xs 2xl:text-lg placeholder:2xl:text-lg text-sm bg-transparent 2xl:px-3 px-1 outline-none"
                type="text"
                
                id=""
                value={filters.id}
                name="id"
                onChange={filterHandler}
              />
            </span>
          </div>
        </div>
        {/* Table */}
        <div class=" flex flex-col ">
          <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded">
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      ID
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Name
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      email
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      city
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      company
                    </th>

                    {/* <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                        Delete
                      </th> */}
                  </tr>
                </thead>

                <tbody class="bg-white">
                  {filteredData?.length > 0 &&
                    filteredData?.map((e) => {
                      return (
                        <tr>
                          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div class="flex items-center">
                              <div class="text-sm font-medium leading-5 text-gray-900">
                                {e?.id}
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div class="flex items-center">
                              <div class="text-sm font-medium leading-5 text-gray-900">
                                {e?.name}
                              </div>
                            </div>
                          </td>
                          {/* <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div class="text-sm leading-5 text-gray-500">
                            {e.email}
                            </div>
                          </td> */}
                          {/* <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div class="text-sm leading-5 text-gray-500">
                                <Moment format="DD-MM-YYYY">
                                  {e?.to_date}
                                </Moment>
                              </div>
                            </td> */}
                          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div class="text-sm leading-5 text-gray-500">
                              {e.email}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div class="text-sm leading-5 text-gray-500">
                              {e.address.city}
                            </div>
                          </td>

                          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div class="text-sm leading-5 text-gray-500">
                              {e?.company.name}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Add Shift Sidebar */}
    </section>
  );
}

export default App