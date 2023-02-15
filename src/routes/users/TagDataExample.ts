import { TagStructure } from "./TagSructure";
/**
 Data conversion from back to front 
 << Back >>
 {
    _id,
    _key,
    _rev,
    name,
    tags_son
 }

 << Conversion >> 
    _id -> id
    _key -> key
    _rev -> rev
    name -> name
    +open
    tag_son -> children

<< Front >>
{
    id,
    key,
    rev,
    name,
    open,
    children? (optional)
}
 */
export const TagDataExample: TagStructure[] = [
    {
        id: "Tag/3614221",
        key: "3614221",
        rev: "_fTUbRV----",
        name: "CONTINENTES",
        open: false,
        children: [
            {
                id: "Tag/3993925",
                key: "3993925",
                rev:  "_fTUcnjq---",
                name: "AMERICA",
                open: false,
                children: [
                    {
                        id: "Tag/5509602",
                        key: "5509602",
                        rev: "_fTUdGgm-_7",
                        name: "MEXICO",
                        open: false,
                        children: [
                            {
                                id: "Tag/5536232",
                                key: "5536232",
                                rev: "_fTUd4KO---",
                                name:"AGUASCALIENTES",
                                open: false
                            },
                            {
                                id: "Tag/5538764",
                                key: "5538764",
                                rev: "_fTUd7sO---",
                                name: "CDMX",
                                open: false
                            }
                        ]
                    },
                    {
                        id: "Tag/5536131",
                        key: "5536131",
                        rev: "_fTUdNA2---",
                        name: "ARGENTINA",
                        open: false,
                    }
                ]
            },
            {
                id: "Tag/3993961",
                key: "3993961",
                rev: "_fTUcz8u---",
                name: "EUROPA",
                open: false,
                children: [

                    {
                        id: "Tag/5536171",
                        key: "5536171",
                        rev: "_fTUdh8O---",
                        name: "ESPANA",
                        open: false
                    },
                    {
                        id: "Tag/5536187",
                        key: "5536187",
                        rev: "_fTUdlkC---",
                        name: "FRANCIA",
                        open: false
                    }
                ]
            }
        ]
    }
]
