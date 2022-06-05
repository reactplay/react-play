SET check_function_bodies = false;
CREATE TABLE public.levels (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL
);
CREATE TABLE public.play_tags (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    play_id uuid NOT NULL,
    tag_id uuid NOT NULL
);
CREATE TABLE public.plays (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    path text NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    component text NOT NULL,
    github text NOT NULL,
    blog text NOT NULL,
    video text NOT NULL,
    featured boolean NOT NULL,
    cover text NOT NULL,
    language text DEFAULT 'js'::text NOT NULL,
    level_id uuid NOT NULL,
    owner_user_id uuid NOT NULL
);
CREATE TABLE public.tags (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL
);
ALTER TABLE ONLY public.levels
    ADD CONSTRAINT levels_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.play_tags
    ADD CONSTRAINT play_tags_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.play_tags
    ADD CONSTRAINT play_tags_play_id_tag_id_key UNIQUE (play_id, tag_id);
ALTER TABLE ONLY public.plays
    ADD CONSTRAINT plays_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_plays_updated_at BEFORE UPDATE ON public.plays FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_plays_updated_at ON public.plays IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_tags_updated_at BEFORE UPDATE ON public.tags FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_tags_updated_at ON public.tags IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.play_tags
    ADD CONSTRAINT play_tags_play_id_fkey FOREIGN KEY (play_id) REFERENCES public.plays(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.play_tags
    ADD CONSTRAINT play_tags_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.tags(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.plays
    ADD CONSTRAINT plays_level_id_fkey FOREIGN KEY (level_id) REFERENCES public.levels(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.plays
    ADD CONSTRAINT plays_owner_user_id_fkey FOREIGN KEY (owner_user_id) REFERENCES auth.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
