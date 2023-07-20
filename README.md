# E-connect

![Demo](https://e-connect-jsljkib47-omar-at-hashem.vercel.app/login)

A simple text messaging application that allows two users to chat with each other in real-time after adding each other via email.

**Please Note:** When testing the application, avoid overloading it as the external services used are only running the free tier, which applies a lot of limits on usage capacity.

## External Services Used

- **Upstash Redis** (Free Tier): Provides the Redis cache for efficient data storage and retrieval.
- **Pusher** (Free Tier): Simplifies the web socket channels required for real-time messaging.

## Dependencies

The following are the dependencies used in this application:

- **tailwindcss** and **headlessui**: Used for styling the user interface, providing a sleek and modern look.
- **axios**: Utilized for data fetching, enabling communication with the server-side.
- **class-variance-authority**: Helps create reusable components with variants, promoting efficient code maintenance.
- **clsx**: Used for class merging, allowing dynamic class assignment in the UI.
- **zod**: Facilitates data validations, ensuring that the input data is accurate and secure.
- **lucide-react**: Provides the icons used in the application, enhancing the visual experience.