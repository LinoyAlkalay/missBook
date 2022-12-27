import { bookService } from './book.service.js'
import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'

export const googleBookService = {
    query,
    get,
    addGoogleBook
}

const googleBooks = [
    {
        "kind": "books#volumes",
        "totalItems": 762,
        "items": [
            {
                "kind": "books#volume",
                "id": "zYw3sYFtz9kC",
                "etag": "a2PVooUKs9E",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/zYw3sYFtz9kC",
                "volumeInfo": {
                    "title": "The Contemporary Thesaurus of Search Terms and Synonyms",
                    "subtitle": "A Guide for Natural Language Computer Searching",
                    "authors": [
                        "Sara D. Knapp"
                    ],
                    "publisher": "Greenwood Publishing Group",
                    "publishedDate": "2000",
                    "description": "Whether your search is limited to a single database or is as expansive as all of cyberspace, you won't find the intended results unless you use the words that work. Now in its second edition, Sara Knapp has updated and expanded this invaluable resource. Unlike any other thesaurus available, this popular guide offers a wealth of natural language options in a convenient, A-to-Z format. It's ideal for helping users find the appropriate word or words for computer searches in the humanities, social sciences, and business. The second edition has added more than 9,000 entries to the first edition's extensive list. Now, the Thesaurus contains almost 21,000 search entries! New or expanded areas include broader coverage of business terms and humanities-including arts literature, philosophy, religion, and music.",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_10",
                            "identifier": "157356107X"
                        },
                        {
                            "type": "ISBN_13",
                            "identifier": "9781573561075"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": true
                    },
                    "pageCount": 718,
                    "printType": "BOOK",
                    "categories": [
                        "Reference"
                    ],
                    "averageRating": 3,
                    "ratingsCount": 1,
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "1.3.3.0.preview.1",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=zYw3sYFtz9kC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=zYw3sYFtz9kC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=zYw3sYFtz9kC&pg=PR21&dq=search+terms&hl=&cd=1&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=zYw3sYFtz9kC&dq=search+terms&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/The_Contemporary_Thesaurus_of_Search_Ter.html?hl=&id=zYw3sYFtz9kC"
                },
                "saleInfo": {
                    "country": "IL",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "IL",
                    "viewability": "PARTIAL",
                    "embeddable": true,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": true,
                        "acsTokenLink": "http://books.google.com/books/download/The_Contemporary_Thesaurus_of_Search_Ter-sample-pdf.acsm?id=zYw3sYFtz9kC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=zYw3sYFtz9kC&hl=&source=gbs_api",
                    "accessViewStatus": "SAMPLE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "The searcher needs to be aware of the context from which the <b>search</b> request is derived as well as the context in which the <b>terms</b> will be <b>searched</b> . The broadest and most obvious <b>search</b> context is the database you choose for your <b>search</b>&nbsp;..."
                }
            },
            {
                "kind": "books#volume",
                "id": "mFT_CgAAQBAJ",
                "etag": "ptl7S7Z3VNQ",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/mFT_CgAAQBAJ",
                "volumeInfo": {
                    "title": "Search Terms: Alpha",
                    "authors": [
                        "Travis Hill"
                    ],
                    "publisher": "Travis Hill",
                    "description": "College sophomore Tyler Gallagher loves computers, video games, and Thanksgiving Break. He's timed the arrival of his computer components with the holiday vacation from school to blast aliens and enemy soldiers alike on his brand new, high-end gaming computer. When the parts arrive, it soon becomes apparent that they aren't what he ordered from TechTerritory. Thinking he's the butt of a practical joke, Tyler plays along, and builds the computer with the obviously fake components. His annoyance turns to shock when the computer powers on. His shock turns to a mix of disbelief and wonder when he learns the strange \"quantum\" computer can pull web pages from the near future. Disbelief and wonder soon become fear and uncertainty when he discovers the future might not be so bright. \"Search Terms: Alpha\" is the first half of a new time travel thriller. 52,000 word novel Adult themes / language / mild sexual content",
                    "readingModes": {
                        "text": true,
                        "image": true
                    },
                    "pageCount": 150,
                    "printType": "BOOK",
                    "categories": [
                        "Fiction"
                    ],
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "1.3.3.0.preview.3",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=mFT_CgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=mFT_CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=mFT_CgAAQBAJ&pg=PT61&dq=search+terms&hl=&cd=2&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=mFT_CgAAQBAJ&dq=search+terms&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Search_Terms_Alpha.html?hl=&id=mFT_CgAAQBAJ"
                },
                "saleInfo": {
                    "country": "IL",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "IL",
                    "viewability": "PARTIAL",
                    "embeddable": true,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": true
                    },
                    "pdf": {
                        "isAvailable": true
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=mFT_CgAAQBAJ&hl=&source=gbs_api",
                    "accessViewStatus": "SAMPLE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "Below the logo was the <b>word</b> “Qwerry.” I assumed it was a play on the <b>word</b> “<b>query</b>” and gave it a mental touche. What the hell, I told myself. I didn&#39;t think anything could surprise me, so why worry about an unknown <b>search</b> engine on a&nbsp;..."
                }
            },
            {
                "kind": "books#volume",
                "id": "DgbhAAAAMAAJ",
                "etag": "YZsnIaxhoLM",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/DgbhAAAAMAAJ",
                "volumeInfo": {
                    "title": "Search INFORM.",
                    "publishedDate": "1986",
                    "industryIdentifiers": [
                        {
                            "type": "OTHER",
                            "identifier": "UOM:39015014503646"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": false
                    },
                    "pageCount": 362,
                    "printType": "BOOK",
                    "categories": [
                        "ABI/INFORM (Information retrieval system)"
                    ],
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "1.4.2.0.preview.0",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=DgbhAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=DgbhAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=DgbhAAAAMAAJ&pg=RA1-PP2&dq=search+terms&hl=&cd=3&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=DgbhAAAAMAAJ&dq=search+terms&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Search_INFORM.html?hl=&id=DgbhAAAAMAAJ"
                },
                "saleInfo": {
                    "country": "IL",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "IL",
                    "viewability": "NO_PAGES",
                    "embeddable": false,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=DgbhAAAAMAAJ&hl=&source=gbs_api",
                    "accessViewStatus": "NONE",
                    "quoteSharingAllowed": false
                }
            },
            {
                "kind": "books#volume",
                "id": "SNAjMMp3H5UC",
                "etag": "93berxU3NYY",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/SNAjMMp3H5UC",
                "volumeInfo": {
                    "title": "Keyword Intelligence",
                    "subtitle": "Keyword Research for Search, Social, and Beyond",
                    "authors": [
                        "Ron Jones"
                    ],
                    "publisher": "John Wiley & Sons",
                    "publishedDate": "2011-10-19",
                    "description": "A unique book on the art and science of keyword research Keyword research can make or break a marketing campaign, an optimization strategy, and pay-per-click ad campaigns. Written by a keyword research expert, this essential resource drills home the importance of targeting the right keywords or phrases in order to get traffic from search engines and social media channels. Author Ron Jones imparts his wisdom and experience for determining which keywords will work based on a searcher's intent and he shows you how to research social, mobile, and video marketing tools that can ultimately become the foundation of a marketing campaign. Boasts detailed how-to information from one of the world's leading keyword research experts Helps you learn how to craft a successful keyword campaign and capture a coveted spot on the first page of a results page Pares down the essential information you need to know to use available tools to get keyword suggestions, forecast web site traffic, perform competitive research, and analyze results Walks you through how to best apply keywords to SEO and PPC campaigns as well as gain visibility with mobile marketing and integrate with traditional marketing efforts Features case studies, examples, tutorials, tips, and previously undocumented techniques No matter your level of experience working with keywords, Keyword Intelligence is the ultimate guide for learning how to best conduct keyword research and craft winning marketing campaigns.",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_13",
                            "identifier": "9781118216910"
                        },
                        {
                            "type": "ISBN_10",
                            "identifier": "1118216911"
                        }
                    ],
                    "readingModes": {
                        "text": true,
                        "image": true
                    },
                    "pageCount": 447,
                    "printType": "BOOK",
                    "categories": [
                        "Business & Economics"
                    ],
                    "averageRating": 5,
                    "ratingsCount": 1,
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "1.7.6.0.preview.3",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=SNAjMMp3H5UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=SNAjMMp3H5UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=SNAjMMp3H5UC&printsec=frontcover&dq=search+terms&hl=&cd=4&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=SNAjMMp3H5UC&dq=search+terms&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Keyword_Intelligence.html?hl=&id=SNAjMMp3H5UC"
                },
                "saleInfo": {
                    "country": "IL",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "IL",
                    "viewability": "PARTIAL",
                    "embeddable": true,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": true,
                        "acsTokenLink": "http://books.google.com/books/download/Keyword_Intelligence-sample-epub.acsm?id=SNAjMMp3H5UC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                    },
                    "pdf": {
                        "isAvailable": true,
                        "acsTokenLink": "http://books.google.com/books/download/Keyword_Intelligence-sample-pdf.acsm?id=SNAjMMp3H5UC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=SNAjMMp3H5UC&hl=&source=gbs_api",
                    "accessViewStatus": "SAMPLE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "This unique, detailed guide to every aspect of keyword research also features case studies, examples, tutorials, tips, and previously undocumented techniques drawn from renowned keyword research expert Ron Jones&#39;s extensive professional ..."
                }
            },
            {
                "kind": "books#volume",
                "id": "77RZAAAAYAAJ",
                "etag": "IKvkwsEC6bU",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/77RZAAAAYAAJ",
                "volumeInfo": {
                    "title": "Pennsylvania Law Encyclopedia",
                    "publishedDate": "2004",
                    "industryIdentifiers": [
                        {
                            "type": "OTHER",
                            "identifier": "PSU:000062618915"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": false
                    },
                    "printType": "BOOK",
                    "categories": [
                        "Law"
                    ],
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "1.3.2.0.preview.0",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=77RZAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=77RZAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=77RZAAAAYAAJ&q=search+terms&dq=search+terms&hl=&cd=5&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=77RZAAAAYAAJ&dq=search+terms&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Pennsylvania_Law_Encyclopedia.html?hl=&id=77RZAAAAYAAJ"
                },
                "saleInfo": {
                    "country": "IL",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "IL",
                    "viewability": "NO_PAGES",
                    "embeddable": false,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=77RZAAAAYAAJ&hl=&source=gbs_api",
                    "accessViewStatus": "NONE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "<b>SEARCHING</b> As the lexis.com8&quot; computer-assisted legal research service is a full-text database, it allows you to <b>search</b> for virtually any <b>word</b> or combination of <b>words</b>. (The only exceptions are certain &quot;noise <b>words</b>&quot; such as in, on, was,&nbsp;..."
                }
            },
            {
                "kind": "books#volume",
                "id": "OMOwmLgbMfYC",
                "etag": "/JNNENb4I8k",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/OMOwmLgbMfYC",
                "volumeInfo": {
                    "title": "Out's Gay & Lesbian Guide to the Web",
                    "authors": [
                        "J. Harrison Fitch"
                    ],
                    "publisher": "Ziff Davis Press",
                    "publishedDate": "1997",
                    "description": "Describes sites on the World Wide Web of special interest to gay men and lesbians",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_10",
                            "identifier": "0789710595"
                        },
                        {
                            "type": "ISBN_13",
                            "identifier": "9780789710598"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": false
                    },
                    "pageCount": 284,
                    "printType": "BOOK",
                    "categories": [
                        "Social Science"
                    ],
                    "maturityRating": "MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "1.4.3.0.preview.0",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=OMOwmLgbMfYC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=OMOwmLgbMfYC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=OMOwmLgbMfYC&q=search+terms&dq=search+terms&hl=&cd=6&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=OMOwmLgbMfYC&dq=search+terms&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Out_s_Gay_Lesbian_Guide_to_the_Web.html?hl=&id=OMOwmLgbMfYC"
                },
                "saleInfo": {
                    "country": "IL",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "IL",
                    "viewability": "NO_PAGES",
                    "embeddable": false,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=OMOwmLgbMfYC&hl=&source=gbs_api",
                    "accessViewStatus": "NONE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "<b>Search</b> Options features. Iust keep these simple guidelines in mind: 0 AND <b>searches</b> are possible by selecting the match all <b>terms</b> (AND) option and then entering whatever <b>words</b> you want in the <b>search</b> box. In the above example,&nbsp;..."
                }
            },
            {
                "kind": "books#volume",
                "id": "T7nuAAAAMAAJ",
                "etag": "mr84yQMzxWw",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/T7nuAAAAMAAJ",
                "volumeInfo": {
                    "title": "Hands-on Information Literacy Activities",
                    "authors": [
                        "Jane Birks",
                        "Fiona Hunt"
                    ],
                    "publisher": "Neal Schuman Pub",
                    "publishedDate": "2003",
                    "description": "Provides activities designed to help students gain information retrieval skills.",
                    "industryIdentifiers": [
                        {
                            "type": "OTHER",
                            "identifier": "UOM:39015056686622"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": false
                    },
                    "pageCount": 135,
                    "printType": "BOOK",
                    "categories": [
                        "Computers"
                    ],
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "1.2.1.0.preview.0",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=T7nuAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=T7nuAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=T7nuAAAAMAAJ&q=search+terms&dq=search+terms&hl=&cd=7&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=T7nuAAAAMAAJ&dq=search+terms&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Hands_on_Information_Literacy_Activities.html?hl=&id=T7nuAAAAMAAJ"
                },
                "saleInfo": {
                    "country": "IL",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "IL",
                    "viewability": "NO_PAGES",
                    "embeddable": false,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=T7nuAAAAMAAJ&hl=&source=gbs_api",
                    "accessViewStatus": "NONE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "(The number should be recorded on the board beside the <b>search term</b>.) c) I am searching for pink AND round. (Write the new search string under the previous one.) d) How many shapes match my <b>search criteria</b>? e) All students with a round&nbsp;..."
                }
            },
            {
                "kind": "books#volume",
                "id": "frL0EpijeEMC",
                "etag": "oFma1R9vS48",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/frL0EpijeEMC",
                "volumeInfo": {
                    "title": "Web Search: Public Searching of the Web",
                    "authors": [
                        "Amanda Spink",
                        "Bernard J. Jansen"
                    ],
                    "publisher": "Springer Science & Business Media",
                    "publishedDate": "2006-02-21",
                    "description": "This book brings together results from the Web search studies we conducted from 1997 through 2004. The aim of our studies has been twofold: to examine how the public at large searches the Web and to highlight trends in public Web searching. The eight-year period from 1997 to 2004 saw the beginnings and maturity of public Web searching. Commercial Web search engines have come and gone, or endured, through the fall of the dot.com companies. We saw the rise and, in some cases, the demise of several high profile, publicly available Web search engines. The study of the Web search is an exciting and important area of interdisciplinary research. Our book provides a valuable insight into the growth and development of human interaction with Web search engines. In this book, our focus is on the human aspect of the interaction between user and Web search engine. We do not investigate the Web search engines themselves or their constantly changing interfaces, algorithms and features. We focus on exploring the cognitive and user aspects of public Web searching in the aggregate. We use a variety of quantitative and qualitative methods within the overall methodology known as transaction log analysis.",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_13",
                            "identifier": "9781402022692"
                        },
                        {
                            "type": "ISBN_10",
                            "identifier": "1402022697"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": true
                    },
                    "pageCount": 199,
                    "printType": "BOOK",
                    "categories": [
                        "Computers"
                    ],
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "preview-1.0.0",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=frL0EpijeEMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=frL0EpijeEMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=frL0EpijeEMC&printsec=frontcover&dq=search+terms&hl=&cd=8&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=frL0EpijeEMC&dq=search+terms&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Web_Search_Public_Searching_of_the_Web.html?hl=&id=frL0EpijeEMC"
                },
                "saleInfo": {
                    "country": "IL",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "IL",
                    "viewability": "PARTIAL",
                    "embeddable": true,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": true,
                        "acsTokenLink": "http://books.google.com/books/download/Web_Search_Public_Searching_of_the_Web-sample-pdf.acsm?id=frL0EpijeEMC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=frL0EpijeEMC&hl=&source=gbs_api",
                    "accessViewStatus": "SAMPLE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "This book brings together results from the Web search studies we conducted from 1997 through 2004."
                }
            },
            {
                "kind": "books#volume",
                "id": "Y7JQD8Ihox4C",
                "etag": "zAlVoIu5tR4",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/Y7JQD8Ihox4C",
                "volumeInfo": {
                    "title": "Search Engine Optimization For Dummies",
                    "authors": [
                        "Peter Kent"
                    ],
                    "publisher": "John Wiley & Sons",
                    "publishedDate": "2012-07-03",
                    "description": "Increase your online ranking with this beginner guide to SEO! Search engine optimization (SEO) is an integral part of getting a site to rank high in the various search engines in order to attract potential customers. With this new edition of a bestseller, you?ll learn the ins and outs and best practices of successful SEO in order to make your website content more search-engine friendly so that it ranks higher among search engines and draws high-volume traffic. Covers search engine basics to help you get started Introduces new coverage on content marketing and reuse, new tracking tools, platform management, and reputation management Details ways to build search-engine friendly sites, register your site with directories and indexes, and use analysis tools to track results Explains how to use link popularity in order to boost rankings Zeroes in on advertising your site by using pay-per-click options Search Engine Optimization For Dummies, 5th Edition is the fun and friendly place to start learning how to move your site to the top of the rankings.",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_13",
                            "identifier": "9781118396124"
                        },
                        {
                            "type": "ISBN_10",
                            "identifier": "111839612X"
                        }
                    ],
                    "readingModes": {
                        "text": true,
                        "image": true
                    },
                    "pageCount": 486,
                    "printType": "BOOK",
                    "categories": [
                        "Computers"
                    ],
                    "averageRating": 5,
                    "ratingsCount": 1,
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": true,
                    "contentVersion": "1.4.4.0.preview.3",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=Y7JQD8Ihox4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=Y7JQD8Ihox4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=Y7JQD8Ihox4C&printsec=frontcover&dq=search+terms&hl=&cd=9&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=Y7JQD8Ihox4C&dq=search+terms&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Search_Engine_Optimization_For_Dummies.html?hl=&id=Y7JQD8Ihox4C"
                },
                "saleInfo": {
                    "country": "IL",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "IL",
                    "viewability": "PARTIAL",
                    "embeddable": true,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": true,
                        "acsTokenLink": "http://books.google.com/books/download/Search_Engine_Optimization_For_Dummies-sample-epub.acsm?id=Y7JQD8Ihox4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                    },
                    "pdf": {
                        "isAvailable": true,
                        "acsTokenLink": "http://books.google.com/books/download/Search_Engine_Optimization_For_Dummies-sample-pdf.acsm?id=Y7JQD8Ihox4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=Y7JQD8Ihox4C&hl=&source=gbs_api",
                    "accessViewStatus": "SAMPLE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "Increase your online ranking with this beginner guide to SEO!"
                }
            },
            {
                "kind": "books#volume",
                "id": "8WyuDwAAQBAJ",
                "etag": "HA+TgRn2u80",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/8WyuDwAAQBAJ",
                "volumeInfo": {
                    "title": "The Joy of Search",
                    "subtitle": "A Google Insider's Guide to Going Beyond the Basics",
                    "authors": [
                        "Daniel M. Russell"
                    ],
                    "publisher": "MIT Press",
                    "publishedDate": "2019-09-24",
                    "description": "A Google researcher reveals the art of online searching, offering tips and tricks on how best to use resources like Google and Wikipedia—plus fun facts and fascinating stories We all know how to look up something online by typing words into a search engine. We do this so often that we have made the most famous search engine a verb: we Google it—“Japan population” or “Nobel Peace Prize” or “poison ivy” or whatever we want to know. But knowing how to Google something doesn't make us search experts; there’s much more we can do to access the massive collective knowledge available online. In The Joy of Search, Daniel Russell shows us how to be great online researchers. We don’t have to be computer geeks or a scholar searching out obscure facts; we just need to know some basic methods. Russell demonstrates these methods with step-by-step searches for answers to a series of intriguing questions—from “what is the wrong side of a towel?” to “what is the most likely way you will die?” Along the way, readers will discover essential tools for effective online searches—and learn some fascinating facts and interesting stories. Russell explains how to frame search queries so they will yield information and describes the best ways to use such resources as Google Earth, Google Scholar, Wikipedia, and Wikimedia. He shows when to put search terms in double quotes, how to use the operator (*), why metadata is important, and how to triangulate information from multiple sources. By the end of this engaging journey of discovering, readers will have the definitive answer to why the best online searches involve more than typing a few words into Google.",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_13",
                            "identifier": "9780262042871"
                        },
                        {
                            "type": "ISBN_10",
                            "identifier": "0262042878"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": true
                    },
                    "pageCount": 337,
                    "printType": "BOOK",
                    "categories": [
                        "Computers"
                    ],
                    "averageRating": 5,
                    "ratingsCount": 1,
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "0.2.1.0.preview.1",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=8WyuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=8WyuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=8WyuDwAAQBAJ&printsec=frontcover&dq=search+terms&hl=&cd=10&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=8WyuDwAAQBAJ&dq=search+terms&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/The_Joy_of_Search.html?hl=&id=8WyuDwAAQBAJ"
                },
                "saleInfo": {
                    "country": "IL",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "IL",
                    "viewability": "PARTIAL",
                    "embeddable": true,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": true,
                        "acsTokenLink": "http://books.google.com/books/download/The_Joy_of_Search-sample-pdf.acsm?id=8WyuDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=8WyuDwAAQBAJ&hl=&source=gbs_api",
                    "accessViewStatus": "SAMPLE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "But knowing how to Google something doesn&#39;t make us search experts; there’s much more we can do to access the massive collective knowledge available online. In The Joy of Search, Daniel Russell shows us how to be great online researchers."
                }
            }
        ]
    }
]

function query(txt) {
    let books = googleBooks[0].items.map(book => {
        return {
            id: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
        }
    })
    if (txt) {
        const regex = new RegExp(txt, 'i')
        books = books.filter(book => regex.test(book.title))
    }
    return Promise.resolve(books)
}

function get(googleBookId) {
    const googleBook = googleBooks[0].items.find(googleBook => googleBook.id === googleBookId)
    return Promise.resolve(googleBook)
}

function addGoogleBook(googleBook) {
    const { id, volumeInfo, saleInfo } = googleBook
    const { title, subtitle, authors, publishedDate, description, pageCount, categories, imageLinks, language } = volumeInfo

    // the function convert the google book to our format!
    const formatedBook = {
        id,
        title,
        subtitle,
        authors: [...authors],
        publishedDate,
        description,
        pageCount,
        categories: [...categories],
        thumbnail: imageLinks.thumbnail,
        language,
        listPrice: {
            amount: utilService.getRandomIntInclusive(19, 190),
            currencyCode: saleInfo.country,
            isOnSale: utilService.getRandomIntInclusive(0, 1) > 0.5 ? true : false
        }
    }

    return storageService.query(BOOK_KEY)
        .then(books => {
            console.log('books:', books)
            const isBookExisting = books.find(book => book.id === formatedBook.id)
            console.log('formatedBook.id:', formatedBook.id)
            if (!isBookExisting) {
                return storageService.post(BOOK_KEY, formatedBook)
            } else {
                if (isBookExisting) throw new Error(`you already add this book`)
            }
        })
}