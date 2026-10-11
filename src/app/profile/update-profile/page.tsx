"use client"
import {
    Button,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
    toast,
} from "@heroui/react";
import { updateUser, useSession } from "@/app/lib/auth-client";
import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProfileSkeleton from "../ProfileSkeleton";

const UpdateProfilePage = () => {
    const { data: session, isPending } = useSession();
    const [isSaving, setIsSaving] = useState(false);
    const savingRef = useRef(false);
    const router = useRouter();

    if (isPending) return <ProfileSkeleton />;
    if (!session) return (
        <main className="min-h-screen p-5 mt-5 lg:p-0 lg:mt-10">
            <div className="max-w-200 mx-auto">
                <p>অনুগ্রহ করে সাইন ইন করুন।</p>
                <Link href="/sign-in" className="text-green-700 underline">সাইন ইন</Link>
            </div>
        </main>
    );

    const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (savingRef.current) return;
        const formData = new FormData(e.currentTarget)
        const name = String(formData.get("name") ?? "").trim();
        if (name.length < 3) {
            toast.danger("নাম কমপক্ষে ৩ অক্ষরের হতে হবে");
            return;
        }

        savingRef.current = true;
        setIsSaving(true);
        try {
            const { data, error } = await updateUser({ name });
            if (error || !data?.status) {
                toast.danger("নাম হালনাগাদ করা যায়নি। আবার চেষ্টা করুন।");
                return;
            }
            toast.success("নাম সফলভাবে হালনাগাদ করা হয়েছে");
            router.push("/profile");
        } catch {
            toast.danger("সংযোগে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        } finally {
            savingRef.current = false;
            setIsSaving(false);
        }

    }
    return (
        <main className="min-h-screen p-5 mt-5 lg:p-0 lg:mt-10">
        <section className="max-w-200 mx-auto bg-white rounded-xl py-5 px-8">
            <h2 id="update-name-heading" className="text-lg font-semibold">নাম হালনাগাদ করুন</h2>
            <div>
                <Form className="max-w-100 mt-5" onSubmit={handleUpdate} aria-busy={isSaving}>
                    <Fieldset aria-labelledby="update-name-heading">
                        <FieldGroup>
                            <TextField
                                isRequired
                                isDisabled={isSaving}
                                name="name"
                                defaultValue={session?.user.name ?? ""}
                                validate={(value) => {
                                    if (value.trim().length < 3) {
                                        return "নাম কমপক্ষে ৩ অক্ষরের হতে হবে";
                                    }
                                    return null;
                                }}
                            >
                                <Label className="text-lg">নাম</Label>
                                <Input className="border rounded-xl border-slate-400 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-500" />
                                <FieldError />
                            </TextField>
                        </FieldGroup>
                        <Fieldset.Actions>
                            <Button type="submit" isDisabled={isSaving} className="bg-green-700 text-white rounded-xl font-semibold hover:bg-green-800">
                                {isSaving ? "হালনাগাদ হচ্ছে…" : "নাম হালনাগাদ করুন"}
                            </Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </Form>
            </div>
        </section>
        </main>
    );
};

export default UpdateProfilePage;
