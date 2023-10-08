import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const movies = [
    {
	name: "The Aviator",
	type: "Biopic",
	url:"https://en.wikipedia.org/wiki/The_Aviator_(2004_film)",
	recommended_by:"@anujdeshpande",
	notes:"Nice insights about what it takes to build a new kind of technology - in this case the Hercules H-4 flying boat",
    },
    {
	name: "The Imitation Game",
	type: "Biopic",
	url:"https://en.wikipedia.org/wiki/The_Imitation_Game",
	recommended_by:"@rituparnamatkar",
	notes:"",
    },

]

export const movie_columns = [
    {
	Header: "Name",
	accessor: "name",
	className: "pester-data-table left",
	Cell: ({ cell: { value }, row: { original } }) => (
		<a href={`${original.url}`} target="blank" rel="noreferrer noopener">
		{value}
	    </a>
	),
    },
    {
	Header: "Type",
	accessor: "type",
	className: "pester-data-table left",
  },
    {
	Header: "Recommended By",
	accessor: "recommended_by",
	className: "pester-data-table",
    },
    {
	Header: "Notes",
	accessor: "notes",
	className: "pester-data-table",
    },
];
