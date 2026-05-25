import Link from "next/link";
import { AuthShell } from "@/components/shared/AuthShell";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function SignInPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to your BizPilot workspace."
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
          <label className="text-sm font-medium text-ink" htmlFor="email">
            Email
          </label>
          <Input id="email" type="email" placeholder="you@business.com" />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-ink" htmlFor="password">
              Password
            </label>
            <Link href="#" className="text-xs font-medium text-brand">
              Forgot?
            </Link>
          </div>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>

        <Link href="/dashboard" className="block">
          <Button className="w-full">Sign in</Button>
        </Link>
      </form>

      <p className="mt-6 text-center text-sm text-ink-secondary">
        Don’t have an account?{" "}
        <Link href="/sign-up" className="font-medium text-ink hover:underline">
          Start free
        </Link>
      </p>
    </AuthShell>
  );
}
