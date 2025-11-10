import Settings from '@/src/components/permission/Settings';
import withPermission from '@/src/components/permission/withPermission';

export default function PermissionPage() {
  const ProtectedSettings = withPermission(Settings);
  return <ProtectedSettings hasPermission={true} />;
}
