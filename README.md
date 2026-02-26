# CareerCode Client

**CareerCode Client** is the frontend application for a career development platform that helps job seekers and employers connect. The UI is built with **React** and bundled with **Vite** for a fast development experience. The app uses Firebase for authentication and Axios for API communication with a backend service.

---

## 🚀 Features

- User authentication with Firebase (email/password & Google)
- Browse, post and apply for jobs
- View job details and applicant lists
- Dashboard with personal applications and posted jobs
- Responsive layout using Tailwind CSS and DaisyUI
- Reusable components like job cards, loaders, avatars, etc.

---

## 🛠️ Tech Stack

- **Framework:** React (v19) with React Router v7
- **Build tool:** Vite
- **Styling:** Tailwind CSS, DaisyUI, Animate.css
- **HTTP client:** Axios
- **State & Hooks:** Custom hooks (`useAuth`, `useAxiosSecure`)
- **Authentication:** Firebase
- **Animations:** Lottie React, Framer Motion (`motion`)
- **Notifications:** React Toastify, SweetAlert2
- **Icons:** Lucide React

---

## 📁 Project Structure

```
src/
├── api/                # Axios calls and custom hooks
├── assets/             # Static/animation files
├── authcontext/        # Context provider for auth state
├── hooks/              # Reusable React hooks
├── layouts/            # Layout components
├── pages/              # Route components organized by feature
│   ├── addJob/
│   ├── home/
│   ├── jobApplicants/
│   ├── jobApply/
│   ├── jobDetails/
│   ├── login/          # SignIn
│   ├── register/       # SignUp
│   ├── myApplications/
│   ├── postedJobs/
│   ├── profile/
│   └── shared/         # Shared UI components
├── provider/           # AuthProvider.jsx
├── router/             # Router.jsx
└── routes/             # PrivateRoutes.jsx
```

---

## 📦 Getting Started

### Prerequisites

- Node.js v18+ installed
- npm or yarn

### Installation

```bash
# clone the repository
git clone https://github.com/<your-org>/career-code-client.git
cd career-code-client

# install dependencies
npm install
```

### Environment Variables

Create a `.env` (or `.env.local`) file in project root containing at least:

```env
VITE_API_URL=https://your-backend-api.example.com
```

### Run Locally

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🧪 Scripts

- `npm run dev` – start development server
- `npm run build` – create production build
- `npm run preview` – locally preview production build
- `npm run lint` – run ESLint

---

## 📘 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/foo`)
3. Commit your changes (`git commit -m 'feat: add foo'`)
4. Push to the branch (`git push origin feature/foo`)
5. Open a pull request

---

## 📄 License

This project is licensed under the MIT License.
