import React from "react";
import { format } from "date-fns";

const Blog = () => {
  let date = format(new Date(), "dd/mm/yyyy");
  return (
    <div>
      <div className="container">
        <div className="md:grid grid-cols-3 gap-x-4">
          <div class=" my-10 overflow-hidden rounded-md bg-white hover:shadow border">
            <img src="https://i.ibb.co/7Vr8zRq/react.jpg" alt="" />
            <div class="p-4">
              {/* <p class="mb-1 text-sm text-primary-500">
            Andrea Felsted • <time>{date}</time>
          </p> */}
              <h3 class="text-xl font-medium text-gray-900">
                Difference between authorization and authentication
              </h3>
              <p class="mt-1 text-gray-500">
                Authentication and authorization are two vital information
                security processes that administrators use to protect systems
                and information. Authentication verifies the identity of a user
                or service, and authorization determines their access rights.
              </p>
              <div class="mt-4 flex gap-2">
                <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Firebase
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                  Product
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                  React
                </span>
              </div>
            </div>
          </div>
          <div class=" my-10 overflow-hidden rounded-md bg-white hover:shadow border">
            <img src="https://i.ibb.co/8X19LGb/authentication.jpg" alt="" />
            <div class="p-4">
              {/* <p class="mb-1 text-sm text-primary-500">
            Andrea Felsted • <time>{date}</time>
          </p> */}
              <h3 class="text-xl font-medium text-gray-900">
                Why are you using firebase?
              </h3>
              <p class="mt-1 text-gray-500">
                The Firebase Realtime Database lets you build rich,
                collaborative applications by allowing secure access to the
                database directly from client-side code. Data is persisted
                locally, and even while offline, realtime events continue to
                fire, giving the end user a responsive experience.
              </p>
              <div class="mt-4 flex gap-2">
                <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Firebase
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                  Authentication
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                  React
                </span>
              </div>
            </div>
          </div>
          <div class=" my-10 overflow-hidden rounded-md bg-white hover:shadow border">
            <img src="https://i.ibb.co/Qf7FJ6g/authentication2.jpg" alt="" />
            <div class="p-4">
              {/* <p class="mb-1 text-sm text-primary-500">
            Andrea Felsted • <time>{date}</time>
          </p> */}
              <h3 class="text-xl font-medium text-gray-900">
                What other options do you have to implement authentication?
              </h3>
              <p class="mt-1 text-gray-500">
                Firebase also leaves the user signed in after they leave, making
                it easier for them to come back and use your app. However, if
                you need a different authentication solution, here are some
                alternatives: Auth0 – Excellent for enabling secure, single
                sign-on. MongoDB – Stores data in JSON-like documents.
              </p>
              <div class="mt-4 flex gap-2">
                <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Firebase
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                  Authentication
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                  React
                </span>
              </div>
            </div>
          </div>
          <div class=" my-10 overflow-hidden rounded-md bg-white hover:shadow border">
            <img src="https://i.ibb.co/SfLgvpX/pexels-markus-spiske-965345.jpg" alt="" />
            <div class="p-4">
              {/* <p class="mb-1 text-sm text-primary-500">
            Andrea Felsted • <time>{date}</time>
          </p> */}
              <h3 class="text-xl font-medium text-gray-900">
                What other services does firebase provide other than
                authentication?
              </h3>
              <p class="mt-1 text-gray-500">
                Cloud Firestore. Build serverless, secure apps at global scale.
                ... Realtime Database. Build serverless apps by storing and
                syncing JSON data between your users in near-realtime, on or
                offline, with strong user-based security. ... Remote Config. ...
                gmp_mods. ... gmp_app_check. ... Cloud Functions. ... gmp_auth.
                ... Cloud Messaging.
              </p>
              <div class="mt-4 flex gap-2">
                <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Firebase
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                  Authentication
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                  React
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
