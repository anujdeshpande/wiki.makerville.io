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
	url:"https://en.wikipedia.org/wiki/The_Imitation_Game",
	recommended_by:"@rituparnamatkar",
	notes:"",
    },
    {
	name: "The World's Fastest Indian",
	url:"https://en.wikipedia.org/wiki/The_World's_Fastest_Indian",
	recommended_by:"@anujdeshpande",
	notes:"",
    },
    {
	name: "The Boy Who Harnessed the Wind",
	url:"https://en.wikipedia.org/wiki/The_Boy_Who_Harnessed_the_Wind",
	recommended_by:"@anooljm",
	notes:"",
    },
    {
	name: "Pirates of Silicon Valley",
	url: "https://www.imdb.com/title/tt0168122/",
	recommended_by: "@daadu",
	notes: "Origin story of Apple and Microsoft",
    },
	{
		name:"Ford v Ferrari",
		url: "https://en.wikipedia.org/wiki/Ford_v_Ferrari",
		recommended_by: "@anujdeshpande"
	},
	{
		name: "Apollo 13",
		url: "https://en.wikipedia.org/wiki/Apollo_13",
		recommended_by: "@anujdeshpande"
	},
	{
		name: "The Martian",
		url: "https://en.wikipedia.org/wiki/The_Martian_(film)",
		recommended_by: "@anujdeshpande"
	},
	{
		name: "Oppenheimer",
		url:"https://en.wikipedia.org/wiki/Oppenheimer_(film)",
		recommended_by: "@anujdeshpande"
	},
	{
		name: "October Sky",
		url: "https://en.wikipedia.org/wiki/October_Sky",
		recommended_by : "@anujdeshpande"
	},
	{
		name: "Moneyball",
		url:"https://en.wikipedia.org/wiki/Moneyball_(film)",
		recommended_by: "@anujdeshpande"
	},
	{
		name: "Tucker",
		url: "https://en.wikipedia.org/wiki/Tucker:_The_Man_and_His_Dream",
		recommended_by: "@anujdeshpande"
	},
	{
		name: "The Right Stuff",
		url: "https://en.wikipedia.org/wiki/The_Right_Stuff_(film)",
		recommended_by: "@anujdeshpande"
	}
]

export const movie_columns = [
    {
	Header: "Name",
	accessor: "name",
	className: "pester-data-table left",
	Cell: ({ cell: { value }, row: { original } }) => (
		<a style={{textDecorationLine: 'underline'}} href={`${original.url}`} target="blank" rel="noreferrer noopener">
		{value}
	    </a>
	),
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
