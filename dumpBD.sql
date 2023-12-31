PGDMP         9                {            jssssss    10.23    10.23 M    Q           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            R           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            S           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            T           1262    16662    jssssss    DATABASE     �   CREATE DATABASE jssssss WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Russian_Russia.1251' LC_CTYPE = 'Russian_Russia.1251';
    DROP DATABASE jssssss;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            U           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            V           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    16671    Weapons    TABLE     =  CREATE TABLE public."Weapons" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    img character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "typeId" integer,
    "brandId" integer
);
    DROP TABLE public."Weapons";
       public         postgres    false    3            �            1259    16677    Weapons_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Weapons_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Weapons_id_seq";
       public       postgres    false    3    196            W           0    0    Weapons_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Weapons_id_seq" OWNED BY public."Weapons".id;
            public       postgres    false    197            �            1259    16679    baskets    TABLE     �   CREATE TABLE public.baskets (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);
    DROP TABLE public.baskets;
       public         postgres    false    3            �            1259    16682    baskets_id_seq    SEQUENCE     �   CREATE SEQUENCE public.baskets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.baskets_id_seq;
       public       postgres    false    3    198            X           0    0    baskets_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.baskets_id_seq OWNED BY public.baskets.id;
            public       postgres    false    199            �            1259    16684    basketweapons    TABLE     �   CREATE TABLE public.basketweapons (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "basketId" integer,
    "WeaponId" integer
);
 !   DROP TABLE public.basketweapons;
       public         postgres    false    3            �            1259    16687    basketweapons_id_seq    SEQUENCE     �   CREATE SEQUENCE public.basketweapons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.basketweapons_id_seq;
       public       postgres    false    3    200            Y           0    0    basketweapons_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.basketweapons_id_seq OWNED BY public.basketweapons.id;
            public       postgres    false    201            �            1259    16689    brands    TABLE     �   CREATE TABLE public.brands (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.brands;
       public         postgres    false    3            �            1259    16692    brands_id_seq    SEQUENCE     �   CREATE SEQUENCE public.brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.brands_id_seq;
       public       postgres    false    3    202            Z           0    0    brands_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;
            public       postgres    false    203            �            1259    16694 
   typebrands    TABLE     �   CREATE TABLE public.typebrands (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "typeId" integer,
    "brandId" integer
);
    DROP TABLE public.typebrands;
       public         postgres    false    3            �            1259    16697    typebrands_id_seq    SEQUENCE     �   CREATE SEQUENCE public.typebrands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.typebrands_id_seq;
       public       postgres    false    204    3            [           0    0    typebrands_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.typebrands_id_seq OWNED BY public.typebrands.id;
            public       postgres    false    205            �            1259    16699    types    TABLE     �   CREATE TABLE public.types (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.types;
       public         postgres    false    3            �            1259    16702    types_id_seq    SEQUENCE     �   CREATE SEQUENCE public.types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.types_id_seq;
       public       postgres    false    206    3            \           0    0    types_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.types_id_seq OWNED BY public.types.id;
            public       postgres    false    207            �            1259    16704    users    TABLE     '  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         postgres    false    3            �            1259    16711    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public       postgres    false    3    208            ]           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
            public       postgres    false    209            �            1259    16713    weaponinfos    TABLE       CREATE TABLE public.weaponinfos (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "WeaponId" integer
);
    DROP TABLE public.weaponinfos;
       public         postgres    false    3            �            1259    16719    weaponinfos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.weaponinfos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.weaponinfos_id_seq;
       public       postgres    false    3    210            ^           0    0    weaponinfos_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.weaponinfos_id_seq OWNED BY public.weaponinfos.id;
            public       postgres    false    211            �
           2604    16721 
   Weapons id    DEFAULT     l   ALTER TABLE ONLY public."Weapons" ALTER COLUMN id SET DEFAULT nextval('public."Weapons_id_seq"'::regclass);
 ;   ALTER TABLE public."Weapons" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    197    196            �
           2604    16722 
   baskets id    DEFAULT     h   ALTER TABLE ONLY public.baskets ALTER COLUMN id SET DEFAULT nextval('public.baskets_id_seq'::regclass);
 9   ALTER TABLE public.baskets ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    199    198            �
           2604    16723    basketweapons id    DEFAULT     t   ALTER TABLE ONLY public.basketweapons ALTER COLUMN id SET DEFAULT nextval('public.basketweapons_id_seq'::regclass);
 ?   ALTER TABLE public.basketweapons ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    201    200            �
           2604    16724 	   brands id    DEFAULT     f   ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);
 8   ALTER TABLE public.brands ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    203    202            �
           2604    16725    typebrands id    DEFAULT     n   ALTER TABLE ONLY public.typebrands ALTER COLUMN id SET DEFAULT nextval('public.typebrands_id_seq'::regclass);
 <   ALTER TABLE public.typebrands ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    205    204            �
           2604    16726    types id    DEFAULT     d   ALTER TABLE ONLY public.types ALTER COLUMN id SET DEFAULT nextval('public.types_id_seq'::regclass);
 7   ALTER TABLE public.types ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    207    206            �
           2604    16727    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    209    208            �
           2604    16728    weaponinfos id    DEFAULT     p   ALTER TABLE ONLY public.weaponinfos ALTER COLUMN id SET DEFAULT nextval('public.weaponinfos_id_seq'::regclass);
 =   ALTER TABLE public.weaponinfos ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    211    210            ?          0    16671    Weapons 
   TABLE DATA                     public       postgres    false    196   rT       A          0    16679    baskets 
   TABLE DATA                     public       postgres    false    198   ?U       C          0    16684    basketweapons 
   TABLE DATA                     public       postgres    false    200   �V       E          0    16689    brands 
   TABLE DATA                     public       postgres    false    202   �V       G          0    16694 
   typebrands 
   TABLE DATA                     public       postgres    false    204   �W       I          0    16699    types 
   TABLE DATA                     public       postgres    false    206   �W       K          0    16704    users 
   TABLE DATA                     public       postgres    false    208   �Y       M          0    16713    weaponinfos 
   TABLE DATA                     public       postgres    false    210   uZ       _           0    0    Weapons_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Weapons_id_seq"', 18, true);
            public       postgres    false    197            `           0    0    baskets_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.baskets_id_seq', 15, true);
            public       postgres    false    199            a           0    0    basketweapons_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.basketweapons_id_seq', 1, false);
            public       postgres    false    201            b           0    0    brands_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.brands_id_seq', 7, true);
            public       postgres    false    203            c           0    0    typebrands_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.typebrands_id_seq', 1, false);
            public       postgres    false    205            d           0    0    types_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.types_id_seq', 14, true);
            public       postgres    false    207            e           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 15, true);
            public       postgres    false    209            f           0    0    weaponinfos_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.weaponinfos_id_seq', 26, true);
            public       postgres    false    211            �
           2606    16730    Weapons Weapons_name_key 
   CONSTRAINT     W   ALTER TABLE ONLY public."Weapons"
    ADD CONSTRAINT "Weapons_name_key" UNIQUE (name);
 F   ALTER TABLE ONLY public."Weapons" DROP CONSTRAINT "Weapons_name_key";
       public         postgres    false    196            �
           2606    16732    Weapons Weapons_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Weapons"
    ADD CONSTRAINT "Weapons_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Weapons" DROP CONSTRAINT "Weapons_pkey";
       public         postgres    false    196            �
           2606    16734    baskets baskets_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT baskets_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.baskets DROP CONSTRAINT baskets_pkey;
       public         postgres    false    198            �
           2606    16736     basketweapons basketweapons_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.basketweapons
    ADD CONSTRAINT basketweapons_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.basketweapons DROP CONSTRAINT basketweapons_pkey;
       public         postgres    false    200            �
           2606    16738    brands brands_name_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_name_key UNIQUE (name);
 @   ALTER TABLE ONLY public.brands DROP CONSTRAINT brands_name_key;
       public         postgres    false    202            �
           2606    16740    brands brands_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.brands DROP CONSTRAINT brands_pkey;
       public         postgres    false    202            �
           2606    16742    typebrands typebrands_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.typebrands
    ADD CONSTRAINT typebrands_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.typebrands DROP CONSTRAINT typebrands_pkey;
       public         postgres    false    204            �
           2606    16744 (   typebrands typebrands_typeId_brandId_key 
   CONSTRAINT     t   ALTER TABLE ONLY public.typebrands
    ADD CONSTRAINT "typebrands_typeId_brandId_key" UNIQUE ("typeId", "brandId");
 T   ALTER TABLE ONLY public.typebrands DROP CONSTRAINT "typebrands_typeId_brandId_key";
       public         postgres    false    204    204            �
           2606    16746    types types_name_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_name_key UNIQUE (name);
 >   ALTER TABLE ONLY public.types DROP CONSTRAINT types_name_key;
       public         postgres    false    206            �
           2606    16748    types types_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.types DROP CONSTRAINT types_pkey;
       public         postgres    false    206            �
           2606    16750    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public         postgres    false    208            �
           2606    16752    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public         postgres    false    208            �
           2606    16754    weaponinfos weaponinfos_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.weaponinfos
    ADD CONSTRAINT weaponinfos_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.weaponinfos DROP CONSTRAINT weaponinfos_pkey;
       public         postgres    false    210            �
           2606    16755    Weapons Weapons_brandId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Weapons"
    ADD CONSTRAINT "Weapons_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE SET NULL;
 J   ALTER TABLE ONLY public."Weapons" DROP CONSTRAINT "Weapons_brandId_fkey";
       public       postgres    false    202    196    2735            �
           2606    16760    Weapons Weapons_typeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Weapons"
    ADD CONSTRAINT "Weapons_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE SET NULL;
 I   ALTER TABLE ONLY public."Weapons" DROP CONSTRAINT "Weapons_typeId_fkey";
       public       postgres    false    2743    206    196            �
           2606    16765    baskets baskets_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT "baskets_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.baskets DROP CONSTRAINT "baskets_userId_fkey";
       public       postgres    false    208    198    2747            �
           2606    16770 )   basketweapons basketweapons_WeaponId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.basketweapons
    ADD CONSTRAINT "basketweapons_WeaponId_fkey" FOREIGN KEY ("WeaponId") REFERENCES public."Weapons"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 U   ALTER TABLE ONLY public.basketweapons DROP CONSTRAINT "basketweapons_WeaponId_fkey";
       public       postgres    false    2727    196    200            �
           2606    16775 )   basketweapons basketweapons_basketId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.basketweapons
    ADD CONSTRAINT "basketweapons_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public.baskets(id) ON UPDATE CASCADE ON DELETE SET NULL;
 U   ALTER TABLE ONLY public.basketweapons DROP CONSTRAINT "basketweapons_basketId_fkey";
       public       postgres    false    198    200    2729            �
           2606    16780 "   typebrands typebrands_brandId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.typebrands
    ADD CONSTRAINT "typebrands_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.typebrands DROP CONSTRAINT "typebrands_brandId_fkey";
       public       postgres    false    2735    202    204            �
           2606    16785 !   typebrands typebrands_typeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.typebrands
    ADD CONSTRAINT "typebrands_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.typebrands DROP CONSTRAINT "typebrands_typeId_fkey";
       public       postgres    false    2743    204    206            �
           2606    16790 %   weaponinfos weaponinfos_WeaponId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.weaponinfos
    ADD CONSTRAINT "weaponinfos_WeaponId_fkey" FOREIGN KEY ("WeaponId") REFERENCES public."Weapons"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 Q   ALTER TABLE ONLY public.weaponinfos DROP CONSTRAINT "weaponinfos_WeaponId_fkey";
       public       postgres    false    210    196    2727            ?   �   x��K=�0�9�$��-A'������b�8xg�8�ur��%�/�X����bU����s��^��v7&�"��E0}�Xi/Gn�k��׆�Q�0<�.���=v�Zv�r��0�3��_��# ��-�T��(給��b�4
�L"�H���^<�DHYL� &��E$2�r�w���q���?�      A   O  x���=o�0@w~���p�}q�N����$jD���B"��.x���|���lW�;�lv��8}_�p:�_ݽW�K;W��;޻vyǏǵ|�ݭi�3uX�����"�Մ4�����6�P@��z�E����W��(�u0��I�H7����E�9�y�,%�@���Ƃ�!-Pd3'ǹ 0�bQBq⬂���礩e�@Q�8]�:p�)�T��E.{�QK5�I�DZ��Μ��2���6Jh�"�;�Ah0>��"-P�:��`=x/�-�%�0��8�&�H"-�4\��Jc�����I�D�pK"=��E/Ty�DK$q&5���]���o�h��2,�      C   
   x���          E     x���AJ�@@�9ŧ���2�4��*E�Z�V��ɨ�1)�d���^D�K�W�$� X눛�>���=��d:��A2�]²��$�J�
zY�B!�Y)�U:�����k�����z<�u��<5���zl��  ���<"�����C'i'�3�S%���\�Y)�-���}{�.m/�ё���b�I(��(��P�Yh{E���6�k�Ҽm�k������-��,nD�e����+�E}+��������1ƀ�Z��#:�K��)#4���MM��| ��4      G   
   x���          I   �  x��ԽN�P𝧸a"����Z'���;B5Dap�cp`�	��đ�|(R^��7��B��V�;0���_�眖+���9)W�OI�suݬ��C˻'�f#Knk7^�$�w^��5��$>tZ��C�\O.JU�Y��9����C���]�F�/�)�9�f��9�f�&w�E.�v �'�Z��B��g���a���a����a�0�0eq-A�0v��6,�kt%��	�'��n �e6-X<�N�1m�|Us�/X��+{�����Z�+Lj�]pD��W�g��^ [엹y��2�Su�m�T��,�z�1&�"_�3mSm&G���`|�����3nQn��|�T�Q��Pp�fꛃ72��hpד�o�4����T�8�����'��k��T�N�ġ�;�m��D��x�      K   �   x���K�@E����*2ǚ^��,��QKs���4G��}
���s.�2�@�G`�qYy�ed�J�
:� �P�d�RU��"Oca@+�EX��ʌ��'g�t,l@��)����Ҥ]_u4���.+=�6�#q� �KSV��.��#G�Ʌ)[ӗ��=]����Ym�����G�o!@���3kh�дg�?mw�i�t�B�      M   �   x���v
Q���W((M��L�+OM,����K�/V��L�Q(�,�I�QHI-N.�,(����QPJ.JM,IMq,QrJR�p�~�%M�0G�P�`#��.l���/6���zfF
�\�����)Y�ZY�Y��k����Ѵ��OL��142��J#��������B�����1d��v3�������㹸 �Ƞ�     