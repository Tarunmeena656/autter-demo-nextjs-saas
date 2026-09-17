import { projects } from "./data";
export function getProjectForUser(user: { orgId: string }, projectId: string) {
  // Scope the lookup to the caller's organization so a guessed or leaked
  // project id from another tenant resolves to "not found" instead of data.
  return (
    projects.find((p) => p.id === projectId && p.orgId === user.orgId) ?? null
  );
}
export function createProject(input: { name: string }) {
  if (input.name.length < 2) throw new Error("name too short");
  return { id: "new", orgId: "org_a", usage: 0, name: input.name.trim() };
}
export function clientValidateProjectName(name: string) {
  return /^[a-z0-9 -]{3,40}$/i.test(name);
}
export function serverValidateProjectName(name: string) {
  return name.trim().length >= 2;
}
