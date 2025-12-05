import * as pulumi from "@pulumi/pulumi";
export declare class Role extends pulumi.CustomResource {
    /**
     * Get an existing Role resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoleState, opts?: pulumi.CustomResourceOptions): Role;
    /**
     * Returns true if the given object is an instance of Role.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Role;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Grants the role the ability to inheritance of privileges of other roles. Unlike PostgreSQL, Materialize does not currently support `NOINHERIT`
     */
    readonly inherit: pulumi.Output<boolean>;
    /**
     * Whether the role can log in. Only available in self-hosted Materialize environments with password authentication enabled. Defaults to <span pulumi-lang-nodejs="`false`" pulumi-lang-dotnet="`False`" pulumi-lang-go="`false`" pulumi-lang-python="`false`" pulumi-lang-yaml="`false`" pulumi-lang-java="`false`">`false`</span>.
     */
    readonly login: pulumi.Output<boolean | undefined>;
    /**
     * The identifier for the role.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Password for the role. Only available in self-hosted Materialize environments with password authentication enabled. Required for password-based authentication. Use<span pulumi-lang-nodejs=" passwordWo " pulumi-lang-dotnet=" PasswordWo " pulumi-lang-go=" passwordWo " pulumi-lang-python=" password_wo " pulumi-lang-yaml=" passwordWo " pulumi-lang-java=" passwordWo "> password_wo </span>for write-only ephemeral values that won't be stored in state.
     */
    readonly password: pulumi.Output<string | undefined>;
    readonly passwordWo: pulumi.Output<string | undefined>;
    /**
     * Version number for the write-only password. Increment this to trigger an update of the password value when using password_wo. Must be used with password_wo.
     */
    readonly passwordWoVersion: pulumi.Output<number | undefined>;
    /**
     * The fully qualified name of the role.
     */
    readonly qualifiedSqlName: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    readonly roleId: pulumi.Output<string>;
    /**
     * Whether the role is a superuser. Only available in self-hosted Materialize environments with password authentication enabled. Defaults to <span pulumi-lang-nodejs="`false`" pulumi-lang-dotnet="`False`" pulumi-lang-go="`false`" pulumi-lang-python="`false`" pulumi-lang-yaml="`false`" pulumi-lang-java="`false`">`false`</span>.
     */
    readonly superuser: pulumi.Output<boolean | undefined>;
    /**
     * Create a Role resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RoleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Role resources.
 */
export interface RoleState {
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * Grants the role the ability to inheritance of privileges of other roles. Unlike PostgreSQL, Materialize does not currently support `NOINHERIT`
     */
    inherit?: pulumi.Input<boolean>;
    /**
     * Whether the role can log in. Only available in self-hosted Materialize environments with password authentication enabled. Defaults to <span pulumi-lang-nodejs="`false`" pulumi-lang-dotnet="`False`" pulumi-lang-go="`false`" pulumi-lang-python="`false`" pulumi-lang-yaml="`false`" pulumi-lang-java="`false`">`false`</span>.
     */
    login?: pulumi.Input<boolean>;
    /**
     * The identifier for the role.
     */
    name?: pulumi.Input<string>;
    /**
     * Password for the role. Only available in self-hosted Materialize environments with password authentication enabled. Required for password-based authentication. Use<span pulumi-lang-nodejs=" passwordWo " pulumi-lang-dotnet=" PasswordWo " pulumi-lang-go=" passwordWo " pulumi-lang-python=" password_wo " pulumi-lang-yaml=" passwordWo " pulumi-lang-java=" passwordWo "> password_wo </span>for write-only ephemeral values that won't be stored in state.
     */
    password?: pulumi.Input<string>;
    passwordWo?: pulumi.Input<string>;
    /**
     * Version number for the write-only password. Increment this to trigger an update of the password value when using password_wo. Must be used with password_wo.
     */
    passwordWoVersion?: pulumi.Input<number>;
    /**
     * The fully qualified name of the role.
     */
    qualifiedSqlName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    roleId?: pulumi.Input<string>;
    /**
     * Whether the role is a superuser. Only available in self-hosted Materialize environments with password authentication enabled. Defaults to <span pulumi-lang-nodejs="`false`" pulumi-lang-dotnet="`False`" pulumi-lang-go="`false`" pulumi-lang-python="`false`" pulumi-lang-yaml="`false`" pulumi-lang-java="`false`">`false`</span>.
     */
    superuser?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a Role resource.
 */
export interface RoleArgs {
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * Whether the role can log in. Only available in self-hosted Materialize environments with password authentication enabled. Defaults to <span pulumi-lang-nodejs="`false`" pulumi-lang-dotnet="`False`" pulumi-lang-go="`false`" pulumi-lang-python="`false`" pulumi-lang-yaml="`false`" pulumi-lang-java="`false`">`false`</span>.
     */
    login?: pulumi.Input<boolean>;
    /**
     * The identifier for the role.
     */
    name?: pulumi.Input<string>;
    /**
     * Password for the role. Only available in self-hosted Materialize environments with password authentication enabled. Required for password-based authentication. Use<span pulumi-lang-nodejs=" passwordWo " pulumi-lang-dotnet=" PasswordWo " pulumi-lang-go=" passwordWo " pulumi-lang-python=" password_wo " pulumi-lang-yaml=" passwordWo " pulumi-lang-java=" passwordWo "> password_wo </span>for write-only ephemeral values that won't be stored in state.
     */
    password?: pulumi.Input<string>;
    passwordWo?: pulumi.Input<string>;
    /**
     * Version number for the write-only password. Increment this to trigger an update of the password value when using password_wo. Must be used with password_wo.
     */
    passwordWoVersion?: pulumi.Input<number>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    roleId?: pulumi.Input<string>;
    /**
     * Whether the role is a superuser. Only available in self-hosted Materialize environments with password authentication enabled. Defaults to <span pulumi-lang-nodejs="`false`" pulumi-lang-dotnet="`False`" pulumi-lang-go="`false`" pulumi-lang-python="`false`" pulumi-lang-yaml="`false`" pulumi-lang-java="`false`">`false`</span>.
     */
    superuser?: pulumi.Input<boolean>;
}
