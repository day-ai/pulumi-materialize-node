import * as pulumi from "@pulumi/pulumi";
export declare class User extends pulumi.CustomResource {
    /**
     * Get an existing User resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserState, opts?: pulumi.CustomResourceOptions): User;
    /**
     * Returns true if the given object is an instance of User.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is User;
    /**
     * The authentication provider for the user.
     */
    readonly authProvider: pulumi.Output<string>;
    /**
     * The email address of the user. This must be unique across all users in the organization.
     */
    readonly email: pulumi.Output<string>;
    readonly metadata: pulumi.Output<string>;
    /**
     * The roles to assign to the user. Allowed values are 'Member' and 'Admin'.
     */
    readonly roles: pulumi.Output<string[]>;
    /**
     * Whether to send an email either inviting the user to activate their account, if the user is new, or inviting the user to
     * join the organization, if the user already exists in another organization. Changing this property after the resource is
     * created has no effect.
     */
    readonly sendActivationEmail: pulumi.Output<boolean | undefined>;
    readonly userId: pulumi.Output<string>;
    readonly verified: pulumi.Output<boolean>;
    /**
     * Create a User resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering User resources.
 */
export interface UserState {
    /**
     * The authentication provider for the user.
     */
    authProvider?: pulumi.Input<string>;
    /**
     * The email address of the user. This must be unique across all users in the organization.
     */
    email?: pulumi.Input<string>;
    metadata?: pulumi.Input<string>;
    /**
     * The roles to assign to the user. Allowed values are 'Member' and 'Admin'.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to send an email either inviting the user to activate their account, if the user is new, or inviting the user to
     * join the organization, if the user already exists in another organization. Changing this property after the resource is
     * created has no effect.
     */
    sendActivationEmail?: pulumi.Input<boolean>;
    userId?: pulumi.Input<string>;
    verified?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    /**
     * The email address of the user. This must be unique across all users in the organization.
     */
    email: pulumi.Input<string>;
    /**
     * The roles to assign to the user. Allowed values are 'Member' and 'Admin'.
     */
    roles: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to send an email either inviting the user to activate their account, if the user is new, or inviting the user to
     * join the organization, if the user already exists in another organization. Changing this property after the resource is
     * created has no effect.
     */
    sendActivationEmail?: pulumi.Input<boolean>;
    userId?: pulumi.Input<string>;
}
