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
    {
	name: "The World's Fastest Indian",
	type: "Biopic",
	url:"https://en.wikipedia.org/wiki/The_World's_Fastest_Indian",
	recommended_by:"@anujdeshpande",
	notes:"",
    },
    {
	name: "The Boy Who Harnessed the Wind",
	type: "Biopic",
	url:"https://en.wikipedia.org/wiki/The_Boy_Who_Harnessed_the_Wind",
	recommended_by:"@anooljm",
	notes:"",
    },
    {
	name: "Pirates of Silicon Valley",
	type: "Biopic",
	url: "https://www.imdb.com/title/tt0168122/",
	recommended_by: "@daadu",
	notes: "Origin story of Apple and Microsoft",
    }
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
