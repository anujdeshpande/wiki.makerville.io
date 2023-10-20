import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const youtube = [
    {
	name: "Makerville",
	url:"https://www.youtube.com/@makerville)",
	recommended_by:"@anujdeshpande",
	notes:"",
    },
    {
	name: "Anool's channel",
	url: "https://www.youtube.com/@AnoolMahidharia",
	recommended_by: "@anujdeshpande",
	notes:"",
    },
        {
	name: "Another Maker",
	url: "https://www.youtube.com/@AnotherMaker",
	recommended_by: "@anujdeshpande",
	notes:"",
    },
    {
	name: "Applied Science",
	url: "https://www.youtube.com/@AppliedScience",
	recommended_by: "@anujdeshpande",
	notes:"",
    },
    {
	name: "Asianoetry",
	url: "https://www.youtube.com/@Asianometry",
	recommended_by: "@anujdeshpande",
	notes:"",
    },
    {
	name: "Ben Eater",
	url: "https://www.youtube.com/@BenEater",
	recommended_by: "@anujdeshpande",
	notes:"",
    },

    {
	name: "bitluni",
	url: "https://www.youtube.com/@bitlunislab",
	recommended_by: "@anujdeshpande",
	notes:"",
    },
    {
	name: "The Efficient Engineer",
	url: "https://www.youtube.com/@TheEfficientEngineer",
	recommended_by: "@daadu",
	notes: "Videos on various Mechanical Engineering concepts",
    }
]

export const youtube_columns = [
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
