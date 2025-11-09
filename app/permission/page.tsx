import Settings from '@/components/permission/Settings';
import withPermission from '@/components/permission/withPermission';

export default function PermissionPage() {
  const ProtectedSettings = withPermission(Settings);
  return <ProtectedSettings hasPermission={true} />;
}
