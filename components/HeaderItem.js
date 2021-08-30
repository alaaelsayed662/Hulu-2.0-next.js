function HeaderItem({ title, Icon }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer sm:w-15 mr-5 hover:text-white last:mr-0">
      <Icon className="h-6 group-hover:animate-bounce" />
      <p className="tracking-widest text-xs uppercase opacity-0 group-hover:opacity-100 ">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
