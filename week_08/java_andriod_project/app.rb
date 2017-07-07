require 'fileutils'

def filter_directories

  excluded_directories = ["bin"]

  all_files = Dir.glob('*')

  return all_files.select do |file|
    next if excluded_directories.include?(file)
    File.directory?(file)
  end
end

def create_bin
  FileUtils.rm_rf('bin')
  FileUtils.mkdir_p('bin')
end

def run_tests directories
  for directory in directories
    puts "building #{directory}"
    system("javac -d bin #{directory}/*.java")
  end
end

create_bin()

valid_directories = filter_directories()

run_tests(valid_directories)
require 'find'

def find_valid_files
  files = []
  Find.find('bin') do |path|
    files << path if path.include?(".class") && path.include?("Test")
  end
  return files
end

def run_tests(files)
  for file in files
    fileName = File.basename(file, ".*" )
    puts "Running #{fileName}"

    system("java org.junit.runner.JUnitCore #{fileName}")
  end
end

valid_files = find_valid_files()

Dir.chdir "bin"

run_tests(valid_files)
