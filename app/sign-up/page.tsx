import Link from "next/link";
import { AuthShell } from "@/components/shared/AuthShell";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function SignUpPage() {
  return (
    <AuthShell
      title="Start free"
      subtitle="Create your workspace in under two minutes."
    >
      <form className="space-y-4">
        <Button
          type="button"
          variant="secondary"
          className="w-full"
          aria-label="Continue with Google"
        >
          Continue with Google
        </Button>

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-border-subtle" />
          <span className="text-xs text-ink-muted">or</span>
          <span className="h-px flex-1 bg-border-subtle" />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-ink" htmlFor="name">
            Full name
          </label>
          <Input id="name" type="text" placeholder="Mirza Aizaman" />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-ink" htmlFor="email">
            Work email
          </label>
          <Input id="email" type="email" placeholder="you@business.com" />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-ink" htmlFor="password">
            Password
          </label>
          <Input id="password" type="password" placeholder="Create a password" />
        </div>

        <Link href="/dashboard/setup" className="block">
          <Button className="w-full">Create workspace</Button>
        </Link>

        <p className="text-center text-xs text-ink-muted">
          By continuing you agree to our Terms and Privacy Policy.
        </p>
      </form>

      <p className="mt-6 text-center text-sm text-ink-secondary">
        Already have an account?{" "}
        <Link href="/sign-in" className="font-medium text-ink hover:underline">
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
