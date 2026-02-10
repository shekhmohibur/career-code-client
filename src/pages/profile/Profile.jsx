import {
  Mail,
  User,
  ShieldCheck,
  ShieldX,
  Clock,
  Fingerprint,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";
const Profile = () => {
  const { user } = useAuth();
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No user data available
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 p-8 text-white flex items-center gap-6">
          <img
            src={
              user.photoURL ||
              `https://ui-avatars.com/api/?background=2563eb&color=fff&name=${user.email}`
            }
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />

          <div>
            <h2 className="text-2xl font-bold">
              {user.displayName || "Unnamed User"}
            </h2>
            <p className="flex items-center gap-2 text-blue-100">
              <Mail size={16} />
              {user.email}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Info
            icon={<Fingerprint className="text-blue-600" />}
            label="User ID"
            value={user.uid}
          />

          <Info
            icon={<User className="text-blue-600" />}
            label="Provider"
            value={user.providerData?.[0]?.providerId || "password"}
          />

          <Info
            icon={
              user.emailVerified ? (
                <ShieldCheck className="text-green-600" />
              ) : (
                <ShieldX className="text-red-600" />
              )
            }
            label="Email Status"
            value={user.emailVerified ? "Verified" : "Not Verified"}
          />

          <Info
            icon={<Clock className="text-blue-600" />}
            label="Account Created"
            value={new Date(user.metadata.creationTime).toLocaleString()}
          />

          <Info
            icon={<Clock className="text-blue-600" />}
            label="Last Login"
            value={new Date(user.metadata.lastSignInTime).toLocaleString()}
          />

          {/* Application Status Section */}
          <div className="col-span-full">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-600 text-sm font-semibold capitalize">
                applied for
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ icon, label, value }) => (
  <div className="flex gap-4 items-start bg-gray-50 rounded-xl p-4">
    <div className="mt-1">{icon}</div>
    <div>
      <p className="text-sm font-semibold text-gray-600">{label}</p>
      <p className="text-gray-900 break-all">{value}</p>
    </div>
  </div>
);

export default Profile;
