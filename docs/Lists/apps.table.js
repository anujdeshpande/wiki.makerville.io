import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const webapps = [
    {
	name:"Polygonia",
	url:"https://polygonia.design/",
	type:"Generative",
	notes: "Create symmetrical sesigns for manufacturing"
    },
    {
	name:"SolveSpace",
	url:"https://solvespace.com/index.pl",
	type:"CAD",
	notes:"Parametric 3D CAD tool"
    },
    {
	name:"Haikei",
	url:"https://app.haikei.app/",
	type:"Generative",
	notes: "Generate unique SVG design assets"
    }
];

export const columns = [
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
	Header: "Type",
	accessor: "type",
	className: "pester-data-table left",
    },
    {
	Header: "Notes",
	accessor: "notes",
	className: "pester-data-table",
    },

];
