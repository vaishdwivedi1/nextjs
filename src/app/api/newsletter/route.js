// // import mailchimp from "@mailchimp/mailchimp_marketing";
// // import { NextResponse } from "next/server";

// // mailchimp.setConfig({
// //   apiKey: "fb79cfe156e5003be1cfdffe11f54d0a-us22",
// //   server: "us-22", // e.g. us1
// // });

// // export async function POST(request) {
// //   const payload = await request.json();
// //   const email = payload?.email;

// //   try {
// //     const response = await mailchimp.lists.addListMember("c4b3366712", {
// //       email_address: email,
// //       status: "subscribed",
// //     });
// //     console.log("Mailchimp response:", response);
// //     return response.send(response, { status: 200 });
// //   } catch (error) {
// //     console.error("Mailchimp error:", error);

// //     if (error.response) {
// //       return NextResponse.json(
// //         { error: error.response.text },
// //         { status: error.response.status }
// //       );
// //     }
// //     return NextResponse.json(
// //       { error: "Internal Server Error" },
// //       { status: 500 }
// //     );
// //   }
// // }

// import mailchimp from "@mailchimp/mailchimp_marketing";
// import { NextResponse } from "next/server";

// mailchimp.setConfig({
//   apiKey: "fb79cfe156e5003be1cfdffe11f54d0a-us22",
//   server: "us22", // e.g. us1
// });

// export async function POST(request) {
//   const payload = await request.json();
//   const email = payload?.email;

//   try {
//     const response = await mailchimp.lists.addListMember("c4b3366712", {
//       email_address: email,
//       status: "subscribed",
//     });
//     console.log("Mailchimp response:", response);
//     return NextResponse.json(response, { status: 200 });
//   } catch (error) {
//     console.error("Mailchimp error:", error);

//     if (error.response) {
//       let errorMessage;
//       try {
//         errorMessage = await error.response.text();
//       } catch (textError) {
//         errorMessage = "Unable to retrieve error details";
//       }
//       return NextResponse.json(
//         { error: errorMessage },
//         { status: error.response.status }
//       );
//     }

//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

import axios from "axios";
import mailchimp from "@mailchimp/mailchimp_marketing";

export const POST = async (req, res) => {
  const { email } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), {
      status: 400,
    });
  }

  try {
    const AUDIENCE_ID = "c4b3366712";
    const API_KEY = "e04552188d949b8bc41d0e3a526690cc-us22";
    const DATACENTER = API_KEY.split("-")[1]; // e.g., us1, us2, etc.

    // const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;
    const url = `https://us22.api.mailchimp.com/3.0/lists/c4b3366712/members`;

   
    const response = await axios.post(
      url,
      {
        email_address: email,
        status: "subscribed",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `apikey e04552188d949b8bc41d0e3a526690cc-us22`,
        },
      }
    );

    return new Response(
      JSON.stringify({ success: true, data: response.data }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.response.data }), {
      status: 500,
    });
  }
};
